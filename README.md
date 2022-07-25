# enzyme-bot

A simple example bot for Enzyme Finance

## Installation

- clone this repo and navigate into it
- install the necessary dependencies with `yarn`
- create a new `.env` file and add the appropriate environment variables per `.env.example`
- run `yarn codegen` to generate the necessary subgraph queries
- run `yarn dev`

## NOTE

Even if you plan on implementing a trading strategy on an Ethereum vault, you should begin by using a Polygon vault to get familiar with the setup and to do initial testing. Next, change the strategy in the `tradeAlgorithmically` function to something that you think will actually make you money. Test it and test it some more. Once you're comfortable, update all the appropriate environment variables to reflect your mainnet Enzyme Vault and change the bot instantiation at the bottom of `index.ts` by passing it `MAINNET` instead of `POLYGON`. Of course, if you are using a Polygon vault then leave the instantiation as is and congrats - you are done!

## Change Log

### 25 July 2022

A [new Medium post]() was published detailing the substantial update to this repo. As a brief recap:

- The bot switched from using the `Kovan` testnet to transacting over `Polygon`
- It now uses Uniswap V3 instead of V2
- It uses the correct properties from the updated subgraph and Enzyme environment

### 2 June 2021

The Medium post that originally accompanied this bot is _mostly_ still accurate, however given a few changes in the protocol due to an upgrade in May 2021, I've updated a few things.

The bot constructor now calls a new subgraph query to populate a `vault` property on the class. This property holds the addresses of both the vault's Comptroller Proxy and the Fund Deployer with which that Comptroller Proxy was... deployed. This is referred to as `release`, and is how we identify on which version of the protocol the Vault is currently deployed. This query serves two purposes - we eliminate an environment variable (the comptroller proxy address), and we can use the release id to filter out assets which the bot will trade; not all assets are available on all releases.

There are various small changes in the bot logic to accomodate this new property and the removal of the old one. I believe they're fairly self-explanatory, but feel free to reach out on Telegram @eek637 if you have any questions.
