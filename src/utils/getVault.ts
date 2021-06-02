import { gql } from './subgraph/sdk';

export async function getVaultInfo(endpoint: string, vaultId: string){
    const result = await gql(endpoint).vault({id: vaultId})
    return result
}