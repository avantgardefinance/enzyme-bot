import { AddressLike } from "@crestproject/ethers";
import { BytesLike, utils } from "ethers";

interface DecodedCallData {
  adapter: AddressLike;
  selector: BytesLike;
  encodedCallArgs: BytesLike;
}

export function decodeCallData(input: BytesLike): DecodedCallData {
  try {
    const decoded = utils.defaultAbiCoder.decode(['address', 'bytes4', 'bytes'], input);

    return {
      adapter: decoded[0],
      selector: decoded[1],
      encodedCallArgs: decoded[2],
    };
  } catch (e) {
    // TODO: fix error for add/remove zero balance tracked assets
    return {} as DecodedCallData;
  }
}
