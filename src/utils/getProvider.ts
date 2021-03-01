import { providers } from 'ethers';
import { loadEnv } from './loadEnv';

export function getProvider(network: 'MAINNET' | 'KOVAN') {
  const node = loadEnv(`${network}_NODE_ENDPOINT`)
  return new providers.StaticJsonRpcProvider(node, network.toLowerCase());
}
