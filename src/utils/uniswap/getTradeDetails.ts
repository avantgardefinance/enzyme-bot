import { ChainId, Token, Fetcher, Trade, Route, TokenAmount, TradeType } from '@uniswap/sdk';
import { BigNumberish, providers } from 'ethers';
import { Asset } from '../subgraph/subgraph';

export interface TokenBasics {
  id: string;
  decimals: number;
}

export async function getTradeDetails(
  network: 'KOVAN' | 'MAINNET',
  provider: providers.BaseProvider,
  sellToken: TokenBasics,
  buyToken: TokenBasics,
  sellTokenAmount: BigNumberish
) {
  const outgoingToken = new Token(ChainId[network], sellToken.id, sellToken.decimals);
  const incomingToken = new Token(ChainId[network], buyToken.id, buyToken.decimals);
  const pair = await Fetcher.fetchPairData(outgoingToken, incomingToken, provider);
  const route = new Route([pair], outgoingToken);
  const tokenOutAmount = new TokenAmount(outgoingToken, sellTokenAmount.toString());
  return new Trade(route, tokenOutAmount, TradeType.EXACT_INPUT);
}
