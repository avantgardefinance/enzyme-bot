import { getDeployment } from './utils/getDeployment';

(async function main() {
  console.log('STARTING IT UP');
  const deployment = await getDeployment();
  console.log(deployment);
})();
