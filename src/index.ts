import { EnzymeBot } from './EnzymeBot';

async function run(bot: EnzymeBot) {
  try {
    const transaction = await bot.tradeAlgorithmically();
    if (!transaction) {
      console.log('The oracle has decided not to trade.');
    } else {
      // do ethers stuff with the transaction
    }
  } catch (error) {
    console.error('THE BOT FAILED :*(');
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
  run(await EnzymeBot.create());
})();
