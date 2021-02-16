/**
 * housekeeping:
 * - instantiate contracts object
 * - instantiate provider
 * - instantiate wallet
 *
 * get fund balance
 * if long
 */

import {
  callOnIntegrationArgs,
  ComptrollerLib,
  IntegrationManager,
  IntegrationManagerActionId,
  takeOrderSelector,
  UniswapV2Adapter,
  uniswapV2TakeOrderArgs,
} from '@enzymefinance/protocol';
import { BigNumberish, Wallet } from 'ethers';
import { getDeployment } from './utils/getDeployment';
import { getProvider } from './utils/getProvider';
import { getToken, getTokens } from './utils/getToken';
import { getWallet } from './utils/getWallet';
import { loadEnv } from './utils/loadEnv';
import { AssetsQuery, CurrentReleaseContractsQuery } from './utils/subgraph/subgraph';

export class ParaswapBot {
  public static async create(network: 'KOVAN' | 'MAINNET', token1: string, token2: string) {
    const subgraphEndpoint = network === 'MAINNET' ? loadEnv('SUBGRAPH_ENDPOINT_MAINNET') : loadEnv('SUBGRAPH_ENDPOINT_KOVAN');
    const providerEndpoint =
      network === 'MAINNET' ? loadEnv('MAINNET_PROVIDER_ENDPOINT') : loadEnv('KOVAN_PROVIDER_ENDPOINT');
    const key = network === 'MAINNET' ? loadEnv('MAINNET_KEY') : loadEnv('KOVAN_KEY');
    const contracts = await getDeployment(subgraphEndpoint);
    const tokens = await getTokens(subgraphEndpoint);
    const provider = getProvider(providerEndpoint);
    const wallet = getWallet(key, provider);
    const fundAddress = loadEnv('FUND_ADDRESS');
    return new this(contracts, tokens, wallet, fundAddress, token1, token2, providerEndpoint, subgraphEndpoint); // add this stuff
  }

  private constructor(
    public readonly contracts: CurrentReleaseContractsQuery,
    public readonly tokens: AssetsQuery,
    public readonly wallet: Wallet,
    public readonly fundAddress: string,
    public readonly token1: string,
    public readonly token2: string,
    public readonly providerEndpoint: string,
    public readonly subgraphEndpoint: string
  ) {}

  public chooseRandomAsset() {
    const assets = this.tokens.assets;
    const random = Math.floor(Math.random() * 10);
    console.log(assets && Object.keys(assets));
    if (!assets || random > assets.length) {
      return undefined;
    }
    return assets[random];
  }

  public async getHoldings() {
    // call vaultLib.getHoldings to return an array of what we've got (should just be 1)
  }

  public async getPrice(sellToken: string, sellTokenAmount: BigNumberish, buyToken: string) {
    // call uniswap (because of kovan availability) to get a price to swap all of the sell token for the buy token
  }

  public async swapTokens(
    sellToken: string,
    buyToken: string,
    outgoingAssetAmount: BigNumberish,
    minIncomingAssetAmount: BigNumberish
  ) {
    const tokenObjects = await Promise.all([sellToken, buyToken].map((token) => getToken(this.subgraphEndpoint, token)))
    // need minIncomingAssetAmount (normalized), outgoing amount, token addresses
    
    const tokensLengthIsNotTwo = tokenObjects.length !== 2
    const tokensAreUndefined = tokenObjects.some((token) => token === undefined)

    if (tokensLengthIsNotTwo || tokensAreUndefined){
      // errror out because you can't find the correct tokens
      return
    }

    const takeOrderArgs = uniswapV2TakeOrderArgs({
      path: [tokenObjects[0]?.id, tokenObjects[1]?.id],
      minIncomingAssetAmount,
      outgoingAssetAmount,
    });

    const callArgs = callOnIntegrationArgs({
      adapter: UniswapV2Adapter,
      selector: takeOrderSelector,
      encodedCallArgs: takeOrderArgs
    })

    const contract = new ComptrollerLib(this.fundAddress, this.wallet)
    const fn = contract.callOnExtension.args(
      IntegrationManager,
      IntegrationManagerActionId.CallOnIntegration,
      callArgs
    )

    // figure out the rest of the transaction logic.
  }

  public async tradeAlgorithmically(){
    // choose a random asset - if it comes back undefined, return and do nothing
    const randomAsset = this.chooseRandomAsset();
    
    if (randomAsset === undefined){
      console.log("An appropriate asset could not be found.")
      return
    }
    
    // check your fund's holdings - should only be one asset
    const currentHoldings = this.getHoldings();

    if (currentHoldings.length > 1){
      console.log('The bot has detected unknown assets in the fund.')
      return
    }

    // get a price from uniswap to swap all of your current asset for the random asset
    const priceToSwap = this.getPrice(currentHoldings[0], randomAsset.id)
    // do that trade

  }
}
