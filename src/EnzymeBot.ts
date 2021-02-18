import {
  callOnIntegrationArgs,
  ComptrollerLib,
  ComptrollerProxy,
  IntegrationManager,
  IntegrationManagerActionId,
  takeOrderSelector,
  UniswapV2Adapter,
  uniswapV2TakeOrderArgs,
  VaultProxy,
} from '@enzymefinance/protocol';
import { Trade } from '@uniswap/sdk';
import { BigNumber, BigNumberish, providers, Wallet } from 'ethers';
import { getDeployment } from './utils/getDeployment';
import { getProvider } from './utils/getProvider';
import { getToken, getTokens } from './utils/getToken';
import { getWallet } from './utils/getWallet';
import { loadEnv } from './utils/loadEnv';
import { Asset, AssetsQuery, CurrentReleaseContractsQuery } from './utils/subgraph/subgraph';
import { getTradeDetails } from './utils/uniswap/getTradeDetails';

export class EnzymeBot {
  public static async create() {
    const network = loadEnv('NETWORK')
    const subgraphEndpoint =
      network === 'MAINNET' ? loadEnv('SUBGRAPH_ENDPOINT_MAINNET') : loadEnv('SUBGRAPH_ENDPOINT_KOVAN');
    const key = network === 'MAINNET' ? loadEnv('MAINNET_KEY') : loadEnv('KOVAN_KEY');
    const contracts = await getDeployment(subgraphEndpoint);
    const tokens = await getTokens(subgraphEndpoint);
    const provider = getProvider(network as 'KOVAN' | 'MAINNET');
    const wallet = getWallet(key, provider);
    const fundAddress = loadEnv('ENZYME_PRODUCT_ADDRESS');

    return new this(network, contracts, tokens, wallet, fundAddress, provider, subgraphEndpoint);
  }

  private constructor(
    public readonly network: string,
    public readonly contracts: CurrentReleaseContractsQuery,
    public readonly tokens: AssetsQuery,
    public readonly wallet: Wallet,
    public readonly fundAddress: string,
    public readonly provider: providers.BaseProvider,
    public readonly subgraphEndpoint: string
  ) {}

  public chooseRandomAsset() {
    const assets = this.tokens.assets;
    const random = Math.random() * 100;
    
    if (!assets || random > assets.length) {
      return undefined;
    }
    return assets[random];
  }

  public async getHoldings() {
    const fund = new ComptrollerProxy(this.fundAddress, this.wallet);
    const vaultAddress = await fund.getVaultProxy();
    const vault = new VaultProxy(vaultAddress, this.wallet);
    const holdings = await vault.getTrackedAssets();
    return holdings?.map((item: string) => getToken(this.subgraphEndpoint, 'id', item));
  }

  public async getPrice(buyToken: Asset, sellToken: Asset, sellTokenAmount: BigNumberish){
    const details = await getTradeDetails(this.network as 'KOVAN' | 'MAINNET', this.provider, sellToken, buyToken, sellTokenAmount);
    return details;
  }

  public async swapTokens(
   trade: Trade
  ) {
    const tokenObjects = await Promise.all(
      [sellToken, buyToken].map((token) => getToken(this.subgraphEndpoint, 'symbol', token))
    );
    // need minIncomingAssetAmount (normalized), outgoing amount, token addresses
    const weth = await getToken(this.subgraphEndpoint, 'symbol', 'WETH');
    const tokensLengthIsNotTwo = tokenObjects.length !== 2;
    const tokensAreUndefined = tokenObjects.some((token) => token === undefined);

    if (tokensLengthIsNotTwo || tokensAreUndefined || !weth) {
      // errror out because you can't find the correct tokens
      return;
    }

    const takeOrderArgs = uniswapV2TakeOrderArgs({
      // check route property on trade object for path
      path: trade.route,
      minIncomingAssetAmount: BigNumber.from(trade),
      outgoingAssetAmount: BigNumber.from(trade.inputAmount),
    });

    const callArgs = callOnIntegrationArgs({
      adapter: UniswapV2Adapter,
      selector: takeOrderSelector,
      encodedCallArgs: takeOrderArgs,
    });

    const contract = new ComptrollerLib(this.fundAddress, this.wallet);
    
    return contract.callOnExtension.args(
      IntegrationManager,
      IntegrationManagerActionId.CallOnIntegration,
      callArgs
    );

    // figure out the rest of the transaction logic.
  }

  public async tradeAlgorithmically() {
    // choose a random asset - if it comes back undefined, return and do nothing
    const randomAsset = this.chooseRandomAsset();

    if (randomAsset === undefined) {
      console.log('An appropriate asset could not be found.');
      return;
    }

    // check your fund's holdings - should only be one asset
    const currentHoldings = await this.getHoldings();

    if (currentHoldings?.length > 1) {
      console.log('The bot has detected unknown assets in the fund.');
      return;
    }
    // get a price from uniswap to swap all of your current asset for the random asset
    const priceToSwap = await this.getPrice(randomAsset, currentHoldings[0].token, currentHoldings[0].amount);
    // do that trade
    return this.swapTokens(priceToSwap)
  }
}
