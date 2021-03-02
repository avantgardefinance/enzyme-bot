import { ChainId, Token, Fetcher, Trade, Route, TokenAmount, TradeType, WETH } from '@uniswap/sdk';
import { BigNumber, utils } from 'ethers';

export interface TokenBasics {
  id: string;
  decimals: number;
  symbol: string;
  name: string;
}

export async function getTradeDetails(
  network: 'KOVAN' | 'MAINNET',
  sellToken: TokenBasics,
  buyToken: TokenBasics,
  sellTokenAmount: BigNumber
) {
  if (network === 'KOVAN') {
    const path = [sellToken.id, buyToken.id];
    const minIncomingAssetAmount = utils
      .parseUnits('1', buyToken.decimals)
      .mul(BigNumber.from(10).pow(buyToken.decimals))
      .div(BigNumber.from(10).pow(buyToken.decimals * 2 - 1));
    const outgoingAssetAmount = sellTokenAmount;

    return {
      path,
      minIncomingAssetAmount,
      outgoingAssetAmount,
    };
  }

  const oneTokenIsWeth =
    utils.getAddress(sellToken.id).toLowerCase() === WETH[ChainId.MAINNET].address.toLowerCase() ||
    utils.getAddress(buyToken.id).toLowerCase() === WETH[ChainId.MAINNET].address.toLowerCase();

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

  let route: Route | null = null;

  if (oneTokenIsWeth) {
    const pair0 = await Fetcher.fetchPairData(outgoingToken, incomingToken);
    route = new Route([pair0], outgoingToken);
  } else {
    const pair1 = await Fetcher.fetchPairData(outgoingToken, WETH[outgoingToken.chainId]);
    const pair2 = await Fetcher.fetchPairData(WETH[incomingToken.chainId], incomingToken);
    route = new Route([pair1, pair2], outgoingToken);
  }

  const tokenOutAmount = new TokenAmount(outgoingToken, sellTokenAmount.toString());
  const trade = new Trade(route, tokenOutAmount, TradeType.EXACT_INPUT);

  const outgoingAssetAmount = utils.parseUnits(
    trade.inputAmount.toFixed(trade.route.input.decimals),
    trade.route.input.decimals
  );

  const minIncomingAssetAmount = utils
    .parseUnits(trade.outputAmount.toFixed(trade.route.output.decimals), trade.route.output.decimals)
    .mul(98)
    .div(100);

  const path = trade.route.path.map((token) => token.address);

  return { path, outgoingAssetAmount, minIncomingAssetAmount };
}
