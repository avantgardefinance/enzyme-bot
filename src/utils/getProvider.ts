import { providers } from 'ethers';

export function getProvider(address: string, network: string) {
  return new providers.JsonRpcProvider(address, network.toLowerCase());
}
