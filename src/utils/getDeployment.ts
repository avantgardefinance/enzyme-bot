import { gql } from './subgraph/sdk';

// pass these your subgraph endpoint
export async function getDeployment(endpoint: string) {
  const result = await gql(endpoint).currentReleaseContracts();
  return result;
}
