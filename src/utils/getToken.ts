import { gql } from './subgraph/sdk';

// pass your subgraph endpoint
export async function getToken(endpoint: string, assetProperty: 'symbol' | 'id', assetPropertyValue: string) {
  const result = await gql(endpoint).assets();
  return result.assets.find((asset) => asset[assetProperty] === assetPropertyValue);
}
