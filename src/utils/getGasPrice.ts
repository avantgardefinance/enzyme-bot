import axios from 'axios';
import { BigNumber } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';

export async function getGasPrice(maxWait: number) {
  try {
    const response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    const data = response.data.gasPriceRange;
    const price = Object.keys(data).find((price) => parseFloat(data[price]) <= maxWait);

    return (price || response.data.fast) / 10;
  } catch (error) {
    throw new Error(`Failed to fetch gas price data: ${error}`);
  }
}

export async function getPolygonGasPrice(): Promise<BigNumber> {
  try {
    const response = await axios.get('https://gasstation-mainnet.matic.network/v2');
    const price = parseUnits(Math.ceil(response.data.fast.maxFee).toString(), 'gwei');

    return price;
  } catch (error) {
    throw new Error(`Failed to fetch gas price data: ${error}`);
  }
}
