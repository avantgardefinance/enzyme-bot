import { providers } from 'ethers';

export function getProvider(address: string) {
  return new providers.JsonRpcProvider(address);
}
