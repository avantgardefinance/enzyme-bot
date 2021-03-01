import { utils } from "ethers";

const defaultRevertError = 'The call was reverted without providing further details.';

export function getRevertError(error: string): string {
  if (error === 'Reverted') {
    return defaultRevertError;
  }

  const encodedPrefix = 'Reverted 0x';
  if (error.startsWith(encodedPrefix)) {
    const bytes = `0x${error.substr(encodedPrefix.length)}`;

    try {
      const stringified = utils.toUtf8String('0x' + bytes.substr(138));
      return getRevertError(stringified);
    } catch {}

    return defaultRevertError;
  }

  return error;
}
