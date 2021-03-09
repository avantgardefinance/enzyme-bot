import {
  callOnIntegrationArgs,
  ComptrollerLib,
  IntegrationManagerActionId,
  takeOrderSelector,
  uniswapV2TakeOrderArgs,
  VaultLib,
} from '@enzymefinance/protocol';
import { BigNumber, providers, utils, Wallet } from 'ethers';
import { getDeployment } from './utils/getDeployment';
import { getProvider } from './utils/getProvider';
import { getToken, getTokens } from './utils/getToken';
import { getTokenBalance } from './utils/getTokenBalance';
import { getWallet } from './utils/getWallet';
import { loadEnv } from './utils/loadEnv';
import { AssetsQuery, CurrentReleaseContractsQuery } from './utils/subgraph/subgraph';
import { getTradeDetails, TokenBasics } from './utils/uniswap/getTradeDetails';

export class EnzymeBot {
  public static async create(network: 'KOVAN' | 'MAINNET') {
    const subgraphEndpoint =
      network === 'MAINNET' ? loadEnv('MAINNET_SUBGRAPH_ENDPOINT') : loadEnv('KOVAN_SUBGRAPH_ENDPOINT');
    const key = network === 'MAINNET' ? loadEnv('MAINNET_PRIVATE_KEY') : loadEnv('KOVAN_PRIVATE_KEY');
    const contracts = await getDeployment(subgraphEndpoint);
    const tokens = await getTokens(subgraphEndpoint);
    const provider = getProvider(network);
    const wallet = getWallet(key, provider);
    const vaultAddress = loadEnv('ENZYME_VAULT_ADDRESS');
    const comptrollerAddress = loadEnv('ENZYME_COMPTROLLER_ADDRESS');

    return new this(network, contracts, tokens, wallet, vaultAddress, comptrollerAddress, provider, subgraphEndpoint);
  }

  private constructor(
    public readonly network: 'KOVAN' | 'MAINNET',
    public readonly contracts: CurrentReleaseContractsQuery,
    public readonly tokens: AssetsQuery,
    public readonly wallet: Wallet,
    public readonly vaultAddress: string,
    public readonly comptrollerAddress: string,
    public readonly provider: providers.JsonRpcProvider,
    public readonly subgraphEndpoint: string
  ) {}

  public chooseRandomAsset() {
    const assets = this.tokens.assets.filter((asset) => !asset.derivativeType);

    if (!assets || assets.length === 0) {
      return undefined;
    }

    const length = assets.length;
    const random = Math.floor(Math.random() * length);

    return assets[random];
  }

  public async getHoldings() {
    const vault = new VaultLib(this.vaultAddress, this.wallet);
    const holdings = await vault.getTrackedAssets();
    return Promise.all(holdings.map((item: string) => getToken(this.subgraphEndpoint, 'id', item.toLowerCase())));
  }

  public async getPrice(buyToken: TokenBasics, sellToken: TokenBasics, sellTokenAmount: BigNumber) {
    const details = await getTradeDetails(this.network, sellToken, buyToken, sellTokenAmount);

    return details;
  }

  public async swapTokens(trade: {
    path: string[];
    minIncomingAssetAmount: BigNumber;
    outgoingAssetAmount: BigNumber;
  }) {
    const adapter = this.contracts.network?.currentRelease?.uniswapV2Adapter;
    const integrationManager = this.contracts.network?.currentRelease?.integrationManager;

    if (!adapter || !integrationManager) {
      console.log(
        'Missing a contract address. Uniswap Adapter: ',
        adapter,
        ' Integration Manager: ',
        integrationManager
      );
      return;
    }

    const takeOrderArgs = uniswapV2TakeOrderArgs({
      path: trade.path,
      minIncomingAssetAmount: trade.minIncomingAssetAmount,
      outgoingAssetAmount: trade.outgoingAssetAmount,
    });

    const callArgs = callOnIntegrationArgs({
      adapter,
      selector: takeOrderSelector,
      encodedCallArgs: takeOrderArgs,
    });

    const contract = new ComptrollerLib(this.comptrollerAddress, this.wallet);

    return contract.callOnExtension.args(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
  }

  public async tradeAlgorithmically() {
    // get a random token
    const randomToken = this.chooseRandomAsset();

    // if no random token return, or if the random token is a derivative that's not available on Uniswap
    if (!randomToken || randomToken.derivativeType) {
      console.log("The Miner's Delight did not find an appropriate token to buy.");
      return;
    }

    // get your fund's holdings
    const vaultHoldings = await this.getHoldings();

    // if you have no holdings, return
    if (vaultHoldings.length === 0) {
      console.log('Your fund has no assets.');
      return;
    }

    // if your vault already holds the random token, return
    if (vaultHoldings.map((holding) => holding?.id.toLowerCase()).includes(randomToken.id.toLowerCase())) {
      console.log("You already hold the asset that the Miner's Delight randomly selected.");
      return;
    }

    // get the amount of each holding
    const holdingAmounts = await Promise.all(
      vaultHoldings.map((holding) => getTokenBalance(this.vaultAddress, holding!.id, this.network))
    );

    // combine holding token data with amounts
    const holdingsWithAmounts = vaultHoldings.map((item, index) => {
      return { ...item, amount: holdingAmounts[index] };
    });

    // find the token you will sell by searching for largest token holding
    const biggestPosition = holdingsWithAmounts.reduce((carry, current) => {
      if (current.amount.gte(carry.amount)) {
        return current;
      }
      return carry;
    }, holdingsWithAmounts[0]);

    console.log(
      `The Miner's Delight has chosen. You will trade ${utils.formatUnits(
        biggestPosition.amount,
        biggestPosition.decimals
      )} ${biggestPosition.name} (${biggestPosition.symbol}) for as many ${randomToken.name} (${
        randomToken.symbol
      }) as you can get.`
    );

    // get the trade data
    const price = await this.getPrice(
      { id: randomToken.id, decimals: randomToken.decimals, symbol: randomToken.symbol, name: randomToken.name },
      {
        id: biggestPosition.id as string,
        decimals: biggestPosition.decimals as number,
        symbol: biggestPosition.symbol as string,
        name: biggestPosition.name as string,
      },
      biggestPosition.amount
    );

    // call the transaction
    return this.swapTokens(price);
  }
}
