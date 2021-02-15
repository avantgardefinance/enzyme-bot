import { gql } from './subgraph/sdk';

export async function getDeployment(endpoint: string){
  const result = await gql(endpoint).currentReleaseContracts()
  return result.network?.currentRelease;
}