import { gql } from './subgraph/sdk';

// pass these your subgraph endpoint
export async function getTokens(endpoint: string) {
  const result = await gql(endpoint).assets();
  return result;
}

export async function getToken(endpoint: string, assetProperty: 'symbol' | 'id', assetPropertyValue: string) {
  const result = await gql(endpoint).assets();
  return result.assets.find((asset) => asset[assetProperty] === assetPropertyValue);
}
