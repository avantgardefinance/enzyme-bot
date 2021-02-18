// use ethers to generate Wallet by passing it a private key and the provider instance
import {providers, Wallet} from 'ethers';

export function getWallet(key: string, provider: providers.BaseProvider){
  return new Wallet(key, provider)
}