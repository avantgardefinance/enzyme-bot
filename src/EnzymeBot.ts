/**
 * housekeeping:
 * - instantiate contracts object
 * - instantiate provider
 * - instantiate wallet
 *
 * get fund balance
 * if long
 */

import { getDeployment } from './utils/getDeployment';
import { getProvider } from './utils/getProvider';
import { getWallet } from './utils/getWallet';
import { loadEnv } from './utils/loadEnv';

export class ParaswapBot {
  public static async create(tokenOne: string, tokenTwo: string, network: 'KOVAN' | 'MAINNET') {
    const endpoint = network === 'MAINNET' ? loadEnv('SUBGRAPH_ENDPOINT_MAINNET') : loadEnv('SUBGRAPH_ENDPOINT_KOVAN');
    const providerEndpoint =
      network === 'MAINNET' ? loadEnv('MAINNET_PROVIDER_ENDPOINT'): loadEnv('KOVAN_PROVIDER_ENDPOINT');
    const key = network === 'MAINNET' ? loadEnv('MAINNET_KEY') :loadEnv('KOVAN_KEY') 
    const contractAddresses = await getDeployment(endpoint);
    const provider = getProvider(providerEndpoint);
    const wallet = getWallet(key, provider)

    return new this() // add this stuff
  }
  private constructor(){}
}
