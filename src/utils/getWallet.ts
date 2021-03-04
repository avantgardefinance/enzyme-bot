import {providers, Wallet} from 'ethers';

export function getWallet(key: string, provider: providers.BaseProvider){
  return new Wallet(key, provider)
}