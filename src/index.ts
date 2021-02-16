import { getDeployment } from './utils/getDeployment';
import { getProvider } from './utils/getProvider';
import { getTokens } from './utils/getToken';
import { loadEnv } from './utils/loadEnv';

(async function main() {
  console.log('STARTING IT UP');
  const endpoint = loadEnv('KOVAN_PROVIDER_ENDPOINT');
  const deployment = await getProvider(endpoint);

  console.log(deployment && (deployment));
})();
