import { THREE } from '@uniswap/sdk/dist/constants';
import { utils } from 'ethers';
import { EnzymeBot } from './EnzymeBot';
import { getTokenBalance } from './utils/getTokenBalance';

async function run(bot: EnzymeBot) {
  try {
    const trades = await bot.tradeAlgorithmically()
    return
  } catch (error) {
    console.error('THE BOT FAILED :*(. Error below: ');
    console.error(error);
  } finally {
    console.log('Scheduling the next iteration...');
    setTimeout(() => {
      run(bot);
    }, 1000 * 60);
  }
}

(async function main() {
  console.log('STARTING IT UP');
  run(await EnzymeBot.create('MAINNET'));
})();
