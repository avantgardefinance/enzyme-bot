import axios from 'axios';

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

export async function getPolygonGasPrice() {
  try {
    const response = await axios.get('https://gasstation-mainnet.matic.network/v2');
    return response.data.safeLow.maxPriorityFee;
  } catch (error) {
    throw new Error(`Failed to fetch gas price data: ${error}`);
  }
}
