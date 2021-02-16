import { gql } from './subgraph/sdk';

export async function getDeployment(endpoint: string) {
  const result = await gql(endpoint).currentReleaseContracts();
  return result;
}

export interface DeploymentContracts {
  adapterBlacklist: string;
  adapterWhitelist: string;
  aggregatedDerivativePriceFeed: string;
  assetBlacklist: string;
  assetWhitelist: string;
  buySharesCallerWhitelist: string;
  chaiAdapter: string;
  chaiIntegratee: string;
  chainlinkPriceFeed: string;
  compoundAdapter: string;
  comptrollerLib: string;
  dispatcher: string;
  entranceRateBurnFee: string;
  entranceRateDirectFee: string;
  feeManager: string;
  fundActionsWrapper: string;
  fundDeployer: string;
  guaranteedRedemption: string;
  integrationManager: string;
  investorWhitelist: string;
  kyberAdapter: string;
  kyberIntegratee: string;
  managementFee: string;
  maxConcentration: string;
  minMaxInvestment: string;
  paraSwapAdapter: string;
  performanceFee: string;
  policyManager: string;
  synthetixAdapter: string;
  synthetixAddressResolver: string;
  synthetixDelegateApprovals: string;
  synthetixIntegratee: string;
  trackedAssetsAdapter: string;
  uniswapV2Adapter: string;
  uniswapV2Integratee: string;
  valueInterpreter: string;
  vaultLib: string;
  wethToken: string;
  zeroExV2Adapter: string;
}
