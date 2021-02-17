import { gql } from './subgraph/sdk';

// pass these your subgraph endpoint
export async function getTokens(endpoint: string) {
  const result = await gql(endpoint).assets();
  return result
}

export async function getToken(endpoint: string, variable: 'symbol' | 'id',  token: string){
  const result = await gql(endpoint).assets();
  return result.assets.find((asset)=> asset[variable] === token)
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

