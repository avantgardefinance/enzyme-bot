/*
Be aware that we are currently NOT using Paraswap for the bot at this time.
It is submitted as a possible addition in the future.
*/

import type { Address } from '@enzymefinance/environment';
import { Environment, Network } from '@enzymefinance/environment';
import {
  callOnIntegrationArgs,
  ComptrollerLib,
  IntegrationManagerActionId,
  paraSwapV5TakeOrderArgs,
  takeOrderSelector,
} from '@enzymefinance/protocol';
import type { providers } from 'ethers';
import { BigNumber } from 'ethers';
import axios from 'axios';

import type { ParaswapPricesData } from './price';
import { paraswapPrice } from './price';

function feeParameters(network: Network) {
  if (network === Network.POLYGON) {
    return {
      partnerAddress: '0xf5ac3c711b016d517a280c8ad38be7c2ff460f17',
      partnerFeeBps: '50',
    };
  }

  return { partner: 'enzyme' };
}

export interface TokenSwapTransaction {
  status: string;
  reason?: string;
  transaction?: {
    data: any;
    to: Address;
    value?: BigNumber;
  };
}

interface ParaswapTransactionResponse {
  expectedAmount: string;
  path: any[];
  uuid: string;
}

// Reference: https://developers.paraswap.network/api/build-parameters-for-transaction
export interface ParaswapTransactionRequestBody {
  srcToken: string;
  srcDecimals?: number;
  destToken: string;
  destDecimals?: number;
  srcAmount: string;
  destAmount: string;
  priceRoute?: ParaswapPricesData['priceRoute'];
  slippage?: number;
  userAddress: string;
  txOrigin?: string;
  receiver?: string;
  partnerAddress?: string;
  partnerFeeBps?: string;
  partner?: string;
  permit?: string;
  deadline?: number;
}

export async function paraswapTransaction({
  comptrollerProxy,
  environment,
  excludeDEXS,
  expectedIncomingAmount,
  incoming,
  maxSlippage,
  originAddress,
  outgoing,
  partner,
  provider,
  quantity,
  userAddress = '',
}: {
  comptrollerProxy: Address;
  environment: Environment;
  excludeDEXS?: string;
  expectedIncomingAmount: BigNumber;
  incoming: any;
  maxSlippage: number;
  originAddress?: string;
  outgoing: any;
  partner: 'avantgarde' | 'enzyme';
  provider: providers.StaticJsonRpcProvider;
  quantity: BigNumber;
  userAddress: string | undefined;
}) {
  try {
    if (!Environment.isSulu(environment)) {
      throw new Error('Invalid environment');
    }

    const priceResult = await paraswapPrice({
      environment,
      excludeDEXS,
      incoming,
      outgoing,
      partner,
      quantity,
    });

    if (priceResult.status === 'ERROR') {
      console.log('No price result');
      throw new Error('No paraswap price');
    }

    const data = priceResult.data;

    if (!data?.priceRoute?.destAmount) {
      console.log('No price destination amount');
      throw new Error('No paraswap price');
    }

    const endpoint = `https://apiv5.paraswap.io/transactions/${environment.network.id}?onlyParams=true&skipChecks=true`;
    const body: ParaswapTransactionRequestBody = {
      destAmount: BigNumber.from(data.priceRoute.destAmount)
        .mul(Math.floor((1 - maxSlippage) * 10000))
        .div(10000)
        .toString(),
      destToken: incoming.id,
      srcAmount: quantity.toString(),
      srcToken: outgoing.id,
      txOrigin: originAddress,
      userAddress,
      ...feeParameters(environment.network.id),
      ...data,
    };

    let paraswapData: ParaswapTransactionResponse | undefined;

    try {
      const { data } = await axios.post(endpoint, body);
      [paraswapData] = data;
      console.log('paraswap data: ', data);
    } catch {
      console.log('Paraswap transaction failed');
    }

    if (!paraswapData?.expectedAmount) {
      console.log('No price');
      throw new Error('No paraswap price');
    }

    const takeOrderArgs = paraSwapV5TakeOrderArgs({
      expectedIncomingAssetAmount: paraswapData.expectedAmount,
      minIncomingAssetAmount: expectedIncomingAmount.mul(Math.floor((1 - maxSlippage) * 10000)).div(10000),
      outgoingAsset: outgoing.id,
      outgoingAssetAmount: quantity,
      paths: paraswapData.path,
      uuid: paraswapData.uuid,
    });

    const adapter = environment.getContract('ParaSwapV5Adapter');
    const integrationManager = environment.getContract('IntegrationManager');
    const callArgs = callOnIntegrationArgs({
      adapter,
      encodedCallArgs: takeOrderArgs,
      selector: takeOrderSelector,
    });

    const contract = new ComptrollerLib(comptrollerProxy, provider);

    return contract.callOnExtension.args(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
  } catch (error) {
    console.log('Failed to create transaction: ', error);
  }
}

// example for use in the tradeAlgorithmically method using current bot values:

// paraswapTransaction({
//   comptrollerProxy: this.account.vault?.comptroller.id,
//   environment: this.environment,
//   expectedIncomingAmount: price.minIncomingAssetAmount,
//   incoming: randomToken,
//   maxSlippage: 0.03,
//   originAddress: this.vaultAddress,
//   outgoing: outgoingVaultAsset,
//   partner: 'enzyme',
//   provider: this.provider,
//   quantity: biggestPosition.amount,
//   userAddress: this.account.vault?.comptroller.creator.id,
// });
