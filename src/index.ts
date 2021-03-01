import { ConstructorFunction } from '@crestproject/ethers';
import { EnzymeBot } from './EnzymeBot';
import { getGasPrice } from './utils/getGasPrice';

async function run(bot: EnzymeBot) {
  try {
    // return the transaction logic
    const tx = await bot.tradeAlgorithmically()
    if (!tx){
      console.log("The bot has decided not to trade")
      return
    }
    // estimate gas
    // const gasPrice = await getGasPrice(2);
    
    // verifies you can send the tx - get an exception if it doesn't validate
    const confirm = await tx.call()
    console.log('CONFIRMED', confirm)

    // get gas limit ()
    const gasLimit = await (await tx.estimate()).mul(10).div(9)
    console.log(gasLimit.toString())
    
    // if sent to false it'll give you the tx object that contains the hash
    // const receipt = await tx.gas(gasLimit, gasPrice).send(false)

    // console.log("HASH ==>", receipt.hash)

    // const resolved =  await receipt.wait()

    // console.log("RESOLVED ==>", resolved)


    // receipt object?
    
    return
  } catch (error) {
    Object.keys(error).forEach(key => console.log(key))
    decodeFunctionData
    console.error('THE BOT FAILED :*(. Error below: ');
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
