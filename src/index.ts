import { isCompositeType } from 'graphql';
import { EnzymeBot } from './EnzymeBot';
import { getRevertError } from './utils/getRevertError';

async function run(bot: EnzymeBot) {
  try {
    // return the transaction object
    const tx = await bot.tradeAlgorithmically();

    // if for some reason the transaction is returned as undefined, return 
    if (!tx) {
      console.log('The bot has decided not to trade');
      return;
    }

    // verifies you can send the tx - throws an exception if it doesn't validate
    await tx.call();

    // get gas limit ()
    const gasLimit = await (await tx.estimate()).mul(10).div(9);

    // if send is set to false it'll give you the tx object that contains the hash
    const receipt = await tx.gas(gasLimit).send(false);

    console.log('This trade has been submitted to the blockchain. TRANSACTION HASH ==>', receipt.hash);
    
    // wait for tx to mine
    const resolved = await receipt.wait();

    console.log(`Transaction successful. You spent ${resolved.gasUsed.toString()} in gas.`);

    return;
  } catch (error) {
    console.error('THE BOT FAILED :*(. Error below: ');

    if (error.error.data) {
      console.log(getRevertError(error.error.data));
      return;
    }
    if (error.error.message) {
      console.log(error.error.message);
      return;
    }
    console.log(error)
  } finally {
    console.log('Scheduling the next iteration...');
    setTimeout(() => {
      run(bot);
    }, 1000 * 60);
  }
}

(async function main() {
  console.log('STARTING IT UP');
  run(await EnzymeBot.create('KOVAN'));
})();
