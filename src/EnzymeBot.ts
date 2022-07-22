import {
  callOnIntegrationArgs,
  ComptrollerLib,
  IntegrationManagerActionId,
  takeOrderSelector,
  uniswapV3TakeOrderArgs,
} from '@enzymefinance/protocol';
import {
  Network,
  getDeployment,
  SuluContracts,
  Environment,
  AssetType,
  PrimitiveAsset,
} from '@enzymefinance/environment';
import { getEnvironment } from '@enzymefinance/environment/all';
import { BigNumber, providers, utils, Wallet } from 'ethers';
import { getProvider } from './utils/getProvider';
import { getTokenBalance } from './utils/getTokenBalance';
import { getVaultInfo } from './utils/getVault';
import { getWallet } from './utils/getWallet';
import { loadEnv } from './utils/loadEnv';
import { VaultDetailsQuery } from './utils/subgraph/subgraph';
import { uniswapV3Price, UniswapPrice } from './utils/uniswap/price';

export class EnzymeBot {
  public static async create(network: 'POLYGON' | 'MAINNET') {
    const subgraphEndpoint =
      network === 'MAINNET' ? loadEnv('MAINNET_SUBGRAPH_ENDPOINT') : loadEnv('POLYGON_SUBGRAPH_ENDPOINT');
    const key = network === 'MAINNET' ? loadEnv('MAINNET_PRIVATE_KEY') : loadEnv('POLYGON_PRIVATE_KEY');
    const provider = getProvider(network);
    const wallet = getWallet(key, provider);
    const vaultAddress = loadEnv('ENZYME_VAULT_ADDRESS');
    const vaultDetails = await getVaultInfo(subgraphEndpoint, vaultAddress);
    const deployment = getDeployment(network === 'MAINNET' ? Network.ETHEREUM : Network.POLYGON).slug;
    const environment = getEnvironment(deployment);
    const contracts = environment.contracts;
    const assets = environment.getAssets({ registered: true, types: [AssetType.PRIMITIVE] });

    return new this(
      network,
      environment,
      contracts,
      assets,
      wallet,
      vaultAddress,
      vaultDetails,
      provider,
      subgraphEndpoint
    );
  }

  private constructor(
    public readonly network: 'POLYGON' | 'MAINNET',
    public readonly environment: Environment,
    public readonly contracts: SuluContracts,
    public readonly assets: PrimitiveAsset[],
    public readonly wallet: Wallet,
    public readonly vaultAddress: string,
    public readonly vaultDetails: VaultDetailsQuery,
    public readonly provider: providers.JsonRpcProvider,
    public readonly subgraphEndpoint: string
  ) {}

  public async chooseRandomAsset() {
    const release = this.vaultDetails.vault?.release.id;

    if (!release) {
      return undefined;
    }

    if (!this.assets || this.assets.length === 0) {
      return undefined;
    }

    const length = this.assets.length;
    const random = Math.floor(Math.random() * length);

    return this.assets[random];
  }

  public async swapTokens(uniswapPrice: UniswapPrice, quantity: BigNumber) {
    const adapter = this.contracts.UniswapV3Adapter;
    const integrationManager = this.contracts.IntegrationManager;
    const comptroller = this.vaultDetails.vault?.comptroller.id;

    if (!adapter || !integrationManager || !comptroller) {
      console.log(
        'Missing a contract address. Uniswap Adapter: ',
        adapter,
        ' Integration Manager: ',
        integrationManager
      );
      return;
    }

    if (!uniswapPrice.path || !uniswapPrice.pools) {
      console.log('uniswap price is missing path or pools');
      return;
    }

    const takeOrderArgs = uniswapV3TakeOrderArgs({
      minIncomingAssetAmount: uniswapPrice.amount?.mul(Math.floor((1 - 0.05) * 10000)).div(10000) ?? 0,
      outgoingAssetAmount: quantity,
      pathAddresses: uniswapPrice.path.map((item) => item.address),
      pathFees: uniswapPrice.pools.map((pool) => BigNumber.from(pool.fee)),
    });

    const callArgs = callOnIntegrationArgs({
      adapter,
      selector: takeOrderSelector,
      encodedCallArgs: takeOrderArgs,
    });

    const contract = new ComptrollerLib(comptroller, this.wallet);
    return contract.callOnExtension.args(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
  }

  public async tradeAlgorithmically() {
    // get a random token
    const randomToken = await this.chooseRandomAsset();

    // if no random token return, or if the random token is a derivative that's not available on Uniswap
    if (!randomToken) {
      console.log("The Miner's Delight did not find an appropriate token to buy.");
      return;
    }

    // get your fund's holdings
    const holdings = this.vaultDetails.vault?.trackedAssets;

    // if you have no holdings, return
    if (!holdings || holdings.length === 0) {
      console.log('Your fund has no assets.');
      return;
    }

    // if your vault already holds the random token, return
    if (holdings.map((holding) => holding.id.toLowerCase()).includes(randomToken.id.toLowerCase())) {
      console.log("You already hold the asset that the Miner's Delight randomly selected.");
      return;
    }

    // get the amount of each holding
    const holdingAmounts = await Promise.all(
      holdings.map((holding) => getTokenBalance(this.vaultAddress, holding.id, this.network))
    );

    // combine holding token data with amounts
    const holdingsWithAmounts = holdings.map((holding, index) => {
      return { ...holding, amount: holdingAmounts[index] };
    });

    // find the token you will sell by searching for largest token holding
    const biggestPosition = holdingsWithAmounts.reduce((carry, current) => {
      if (current.amount.gte(carry.amount)) {
        return current;
      }
      return carry;
    }, holdingsWithAmounts[0]);

    // get the proper Asset object to pass for uniswap price
    const outgoingVaultAsset = this.assets.filter(
      (asset) => asset.id.toLowerCase() === biggestPosition.id.toLowerCase()
    )[0];

    console.log(
      `The Miner's Delight has chosen. You will trade ${utils.formatUnits(
        biggestPosition.amount,
        outgoingVaultAsset.decimals
      )} ${outgoingVaultAsset.name} (${outgoingVaultAsset.symbol}) for as many ${randomToken.name} (${
        randomToken.symbol
      }) as you can get.`
    );

    const uniswapPrice = await uniswapV3Price({
      environment: this.environment,
      incoming: randomToken,
      outgoing: outgoingVaultAsset,
      quantity: biggestPosition.amount,
      provider: this.provider,
    });

    if (uniswapPrice.status === 'ERROR' || !uniswapPrice.amount || !uniswapPrice.path || !uniswapPrice.pools) {
      console.log('No route for uniswap price found');
      throw new Error('No route for uniswap price found');
    }

    // call the transaction
    return this.swapTokens(uniswapPrice, biggestPosition.amount);
  }
}
