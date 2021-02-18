import { providers } from 'ethers';

export function getProvider(network: 'MAINNET' | 'KOVAN') {
  return  providers.getDefaultProvider(network);
}
