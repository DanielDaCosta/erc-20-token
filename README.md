# erc-20-token

Creating my own token using the ERC-20 standard => DPC Token

# Dependencies
```json
{
  "dependencies": {
    "@openzeppelin/contracts": "^4.5.0",
    "@truffle/hdwallet-provider": "^2.0.4",
  }
}
```

```bash
Truffle v5.5.3 (core: 5.5.3)
Ganache v7.0.1
Solidity - 0.8.12 (solc-js)
Node v16.14.0
Web3.js v1.5.3
```

# Usage

## Create Token
Update `contracts/DanielToken.sol` with your new token information.

## Pass the parameters specified in the Contract constructor
To be able to deploy your token you will need to create a file in the migrations folder create a new file *2_initial_migration.js*. 

## (optional) Deploy to a local blockchain
Deploy to truffle develop
```
1) Open a Terminal window, and make sure you are inside your project directory

2) Run the command `truffle develop` (to run a local ethereum network)

3) Use the command `compile` (to compile your solidity contract files)

4) Use the command `migrate --reset` (to deploy your contract to the locally running ethereum network)
```

## Deploy to Ropsten Test Network
In the file `truffle-config.js`, replace {YOUR_PRIVATE_KEY} with your **Metamask** private key and {YOUR_INFURA_ACCOUNT} with your **infura** account robsten endpoint

```
truffle migrate --reset --network ropsten
```
