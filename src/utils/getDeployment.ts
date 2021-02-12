import { gql } from './subgraph/sdk';

export async function getDeployment(){
  const result = await gql.currentReleaseContracts()
  return result.network?.currentRelease;
}