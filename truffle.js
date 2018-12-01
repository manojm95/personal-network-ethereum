/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    development: {
      host: "localhost", //our network is running on localhost
      port: 8545, // port where your blockchain is running
      network_id: "*",
      from: "0xdb47dae2acc89fd252270386962d32c3db833d45", // use the account-id generated during the setup process
      gas: 4712388
    }
  }
};
