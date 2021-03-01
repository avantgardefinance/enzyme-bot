import { providers } from 'ethers';
import { loadEnv } from './loadEnv';

export function getProvider(network: 'MAINNET' | 'KOVAN') {
  const key = loadEnv(`${network}_PROVIDER_API_KEY`);
  return providers.getDefaultProvider(network.toLowerCase(), { alchemy: key });
}
