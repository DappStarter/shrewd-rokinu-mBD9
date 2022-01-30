require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rice sad honey hover praise army giant'; 
let testAccounts = [
"0xa1acd59d0b357e72c2a8edacff5c8b1dd02e9f0b67c0ef8875d58da4865fe097",
"0x25e8f249cb4ccb05af6c09774f9a266d6062168e433f34d6d3ca6402a237b12d",
"0x8ba8a518dec7eb559c875b9ae53727f17149e75ccd5420815e8704e76cff2c0b",
"0x0865fbb3a3639a749d9c28a587df8fbc721b506a5d10053186428335cde7cfab",
"0xd64dd242cbb71a32a43cbf336729a169a670861d953db3685dcd1bf42fe0a472",
"0x75312ee164dd8f27f30f2536606539fee7ff8d76c2c7d69e525d10cfd847322d",
"0xaa813d7cc35f972c1f2f56545d06a9bb10267ac5deda4cc841d4744072bf126b",
"0xb5c21d06c69a57a98ea5c43b9d9035743843e69f72ecc8641e2a317f178c2610",
"0x316e132c7b3c4c48112b892595f894c168b0af6c8588f11926c690c26431b65d",
"0x695853e8344f690772293460c427453f1f79186cc98aacce032d366e56281ac9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

