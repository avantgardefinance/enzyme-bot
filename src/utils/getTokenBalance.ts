import { StandardToken } from '@enzymefinance/protocol';
import { getProvider } from './getProvider';

export async function getTokenBalance(fund: string, token: string, providerEndpoint: string ){
  const provider = getProvider(providerEndpoint);
  const contract = new StandardToken(token, provider)
  return contract.balanceOf.args(fund).call()
}