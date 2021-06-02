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

## Change Log

### 2 June 2021

The Medium post that originally accompanied this bot is *mostly* still accurate, however given a few changes in the protocol due to an upgrade in May 2021, I've updated a few things.

The bot constructor now calls a new subgraph query to populate a `vault` property on the class. This property holds the addresses of both the vault's Comptroller Proxy and the Fund Deployer with which that Comptroller Proxy was... deployed. This is referred to as `release`, and is how we identify on which version of the protocol the Vault is currently deployed. This query serves two purposes - we eliminate an environment variable (the comptroller proxy address), and we can use the release id to filter out assets which the bot will trade; not all assets are avaiable on all releases. 

There are various small changes in the bot logic to accomodate this new property and the removal of the old one. I believe they're fairly self-explanatory, but feel free to reach out on Telegram @eek637 if you have any questions.
