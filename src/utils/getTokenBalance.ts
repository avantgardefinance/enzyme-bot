import { StandardToken } from '@enzymefinance/protocol';
import { getProvider } from './getProvider';

export async function getTokenBalance(vaultContract: string, token: string, network: "KOVAN" | "MAINNET" ){
  const provider = getProvider(network);
  const contract = new StandardToken(token, provider)
  return contract.balanceOf.args(vaultContract).call()
}