import type { Environment, PrimitiveAsset } from '@enzymefinance/environment';
import { Exchange } from '@enzymefinance/environment';
import { Protocol } from '@uniswap/router-sdk';
import { CurrencyAmount, Percent, Token, TradeType } from '@uniswap/sdk-core';
import { AlphaRouter } from '@uniswap/smart-order-router';
import type { Pair } from '@uniswap/v2-sdk';
import type { Pool } from '@uniswap/v3-sdk';
import type { providers } from 'ethers';
import { BigNumber, utils } from 'ethers';

export interface TokenSwapPrice {
  exchange: Exchange;
  status: string;
  amount?: BigNumber;
  price?: number;
  bestRoute?: string;
  reason?: string;
  fastTransactionRequired?: boolean;
}

export type UniswapPrice = TokenSwapPrice & { path?: Token[]; pools?: Pool[] };

export async function uniswapV3Price({
  environment,
  incoming,
  outgoing,
  quantity,
  slippage = 3,
  provider,
}: {
  incoming: PrimitiveAsset;
  environment: Environment;
  outgoing: PrimitiveAsset;
  quantity: BigNumber;
  slippage?: number;
  provider: providers.StaticJsonRpcProvider;
}): Promise<UniswapPrice> {
  try {
    const chainId = Number(environment.network.id);
    const router = new AlphaRouter({ chainId, provider });

    if (incoming.id === outgoing.id) {
      console.log('Assets are identical');
      throw new Error('Assets are the identical');
    }

    const tokenA = new Token(chainId, utils.getAddress(outgoing.id), outgoing.decimals);
    const tokenB = new Token(chainId, utils.getAddress(incoming.id), incoming.decimals);

    const tokenAAmount = CurrencyAmount.fromRawAmount(tokenA, quantity.toString());

    const route = await router.route(
      tokenAAmount,
      tokenB,
      TradeType.EXACT_INPUT,
      {
        recipient: environment.contracts.IntegrationManager,
        slippageTolerance: new Percent(Math.floor(slippage * 100), 100),
        deadline: Math.floor(Date.now() / 1000 + 1800),
      },
      {
        protocols: [Protocol.V3],
      }
    );

    if (!route) {
      console.log('No uniswap alpha router route found');
      throw new Error('No uniswap alpha router route found');
    }

    const price =
      Number(route.quote.toExact()) / Number(utils.formatUnits(BigNumber.from(quantity).toString(), tokenA.decimals));

    const bestRoute = route.trade.routes[0].path.map((item) => getSymbol(environment, item)).join(' > ') || '';

    return {
      amount: utils.parseUnits(route.quote.toFixed(tokenB.decimals), tokenB.decimals),
      bestRoute,
      exchange: Exchange.UNISWAP_V3,
      price,
      status: 'OK',
      path: route.trade.routes[0].path,
      pools: route.trade.routes[0].pools.filter(isPool),
    };
  } catch (error) {
    console.log('Uniswap price error: ', error);

    return {
      exchange: Exchange.UNISWAP_V3,
      reason: 'No price',
      status: 'ERROR',
    };
  }
}

function isPool(candidate: Pair | Pool): candidate is Pool {
  return 'fee' in candidate;
}

export function getSymbol(environment: Environment, token: Token) {
  const address = token.address.toLowerCase();

  return environment.hasAsset(address) ? environment.getAsset(address).symbol : token.symbol;
}
