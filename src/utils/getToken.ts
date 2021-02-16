import { gql } from './subgraph/sdk';

export async function getTokens(endpoint: string) {
  const result = await gql(endpoint).assets();
  return result
}

export async function getToken(endpoint: string, tokenSymbol: string){
  const result = await gql(endpoint).assets();
  return result.assets.find((asset)=> asset.symbol === tokenSymbol)
}

export interface Token {
  compoundAssetDetail: null | string;
  decimals: number;
  derivativeType: null | string;
  id: string;
  name: string;
  price: { price: string; timestamp: string; },
  removed: boolean;
  symbol: string;
  type: string;
  uniswapV2PoolAssetDetail: string | null;
}

