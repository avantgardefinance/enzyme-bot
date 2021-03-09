# enzyme-bot

A naive bot for Enzyme Finance

## Installation

- clone this repo and navigate into it
- install the necessary dependencies with `yarn`
- create a new `.env` file and add the appropriate environment variables per `.env.example`
- run `yarn codegen` to generate the necessary subgraph queries
- run `yarn dev`

## NOTE

Start out on Kovan to get a feel for how this bot works. Change the strategy in the `tradeAlgorithmically` function to something that you think will actually make you money. Test it some more. Once you're comfortable, update all the appropriate environment variables to reflect your mainnet Enzyme Vault and change the bot instantiation in `index.ts` by passing it `MAINNET`
