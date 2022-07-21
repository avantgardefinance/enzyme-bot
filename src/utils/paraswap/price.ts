import type { Asset, Environment } from '@enzymefinance/environment';
import { Exchange } from '@enzymefinance/environment';
import { BigNumber, utils } from 'ethers';
import axios from 'axios';

export interface TokenSwapPrice {
  exchange: Exchange;
  status: string;
  amount?: BigNumber;
  price?: number;
  bestRoute?: string;
  reason?: string;
  fastTransactionRequired?: boolean;
}

interface ParaswapPricesArgs {
  srcToken: string;
  srcDecimals: number;
  destToken: string;
  destDecimals: number;
  amount: string;
  side?: 'BUY' | 'SELL';
  network: number;
  otherExchangePrices?: boolean;
  includDEXS?: string;
  excludeDEXS?: string;
  includeContractMethods?: string;
  excludeContractMethods?: string;
  userAddress?: string;
  route?: string;
  partner: string;
}

export interface ParaswapPricesData {
  priceRoute?: {
    blockNumber: number;
    network: number;
    srcToken: string;
    srcAmount: string;
    srcDecimals: number;
    destToken: string;
    destAmount: string;
    destDecimals: string;
    bestRoute: {
      percent: number;
      swaps: {
        exchange: string;
        percent: number;
        srcToken: string;
        srcDecimals: number;
        destToken: string;
        destDecimals: number;
        swapExchanges: {
          exchange: string;
          srcAmount: string;
          destAmount: string;
          percent: number;
        }[];
      }[];
    }[];
    gasCostUSD: string;
    gasCost: string;
    side: string;
    tokenTransferProxy: string;
    contractAddress: string;
    partnerFee: number;
    srcUSD: string;
    destUSD: string;
    partner: string;
    maxImpactReached: boolean;
    hmac: string;
  };
  error?: string;
}

export async function paraswapPrice({
  incoming,
  outgoing,
  environment,
  quantity,
  partner,
  excludeDEXS,
}: {
  environment: Environment;
  incoming: Asset;
  outgoing: Asset;
  quantity: BigNumber;
  excludeDEXS?: string;
  partner: 'avantgarde' | 'enzyme';
}): Promise<TokenSwapPrice & { data?: ParaswapPricesData }> {
  let data: ParaswapPricesData | undefined;

  try {
    if (incoming.id === outgoing.id) {
      return {
        exchange: Exchange.PARASWAP,
        reason: 'Incoming and outgoing asset are identical',
        status: 'ERROR',
      };
    }

    const params: ParaswapPricesArgs = {
      amount: quantity.toString(),
      destDecimals: incoming.decimals,
      destToken: incoming.id,
      includeContractMethods: 'multiSwap',
      network: environment.network.id,
      partner,
      srcDecimals: outgoing.decimals,
      srcToken: outgoing.id,
      ...(excludeDEXS ? { excludeDEXS } : {}),
    };

    try {
      const response = await axios.get('https://apiv5.paraswap.io/prices/', { params });
      data = response.data;
      console.log('Paraswap price data: ', data);
    } catch (error) {
      console.log('Paraswap API error when retrieving Paraswap prices: ', error);
    }

    if (data?.error) {
      return {
        exchange: Exchange.PARASWAP,
        reason: data.error,
        status: 'ERROR',
      };
    }

    if (!data?.priceRoute?.destAmount) {
      return {
        exchange: Exchange.PARASWAP,
        reason: 'No price',
        status: 'UNAVAILABLE',
      };
    }

    const amount = BigNumber.from(data.priceRoute.destAmount);

    const price = amount.mul(BigNumber.from(10).pow(outgoing.decimals)).div(quantity);

    const bestRoute =
      data.priceRoute.bestRoute[0]?.swaps?.[0]?.swapExchanges
        ?.map((item: any) => `${item.exchange} ${item.percent}%`)
        .join(',  ') || '';

    const fastTransactionRequired = data.priceRoute.bestRoute[0]?.swaps?.[0]?.swapExchanges.some((item: any) =>
      ['paraswappool', 'paraswappool2', 'paraswappool3', 'paraswappool4', 'paraswappool5'].includes(
        item.exchange.toLowerCase()
      )
    );

    return {
      amount,
      bestRoute,
      data,
      exchange: Exchange.PARASWAP,
      fastTransactionRequired,
      price: Number(utils.formatUnits(price, incoming.decimals)),
      status: 'OK',
    };
  } catch (error) {
    console.log('Unexpected error at paraswapPrice: ', error);

    return {
      exchange: Exchange.PARASWAP,
      reason: 'No price',
      status: 'ERROR',
    };
  }
}
