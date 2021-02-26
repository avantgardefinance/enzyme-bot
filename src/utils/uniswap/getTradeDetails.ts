import { ChainId, Token, Fetcher, Trade, Route, TokenAmount, TradeType, WETH } from '@uniswap/sdk';
import { BigNumberish, providers, utils } from 'ethers';

export interface TokenBasics {
  id: string;
  decimals: number;
  symbol: string;
  name: string;
}

export async function getTradeDetails(
  network: 'KOVAN' | 'MAINNET',
  provider: providers.BaseProvider,
  sellToken: TokenBasics,
  buyToken: TokenBasics,
  sellTokenAmount: BigNumberish
) {
  const outgoingToken = new Token(
    ChainId[network],
    utils.getAddress(sellToken.id),
    sellToken.decimals,
    sellToken.symbol,
    sellToken.name
  );
  
  const incomingToken = new Token(
    ChainId[network],
    utils.getAddress(buyToken.id),
    buyToken.decimals,
    buyToken.symbol,
    buyToken.name
  );
  
  const pair1 = await Fetcher.fetchPairData(outgoingToken, WETH[outgoingToken.chainId]);
  const pair2 = await Fetcher.fetchPairData(WETH[incomingToken.chainId], incomingToken);
  const route = new Route([pair1, pair2], outgoingToken);
  const tokenOutAmount = new TokenAmount(outgoingToken, sellTokenAmount.toString());
  
  return new Trade(route, tokenOutAmount, TradeType.EXACT_INPUT);
}
