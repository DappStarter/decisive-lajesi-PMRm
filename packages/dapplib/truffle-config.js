require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember method heavy clog surge gasp'; 
let testAccounts = [
"0xf3b1675d15f0d202442340686e847abaa27e5c71a46abef968b478bee4e3ee56",
"0xf4a1ea7267f1264600ddf1ccda1f4b150352489eb7850da4cbc2278507e5884d",
"0x6f5a0b489a1c318e2c36fb704c67a1885bb67543e13f6dca896f1b30f6ef4a48",
"0xd555fcdc2fce6b379e905e4f4364299e94963b54d4a1af3b2d2eac0963bc6381",
"0x2cf24aac21e73a8e48e3b70f2e982c2ef5359f24c6ca05a24d45a9ee2112a0ce",
"0xda03ae585a1ad59ac7df5fa477d666ea99601986183b3c232bf55aad9d25bfd3",
"0x5946c546c2ba88bd84962c0f6c65111d336675251aa4edd3e4aea1b9ed249029",
"0x2461ec77169d2b1a4240b47307bdda9966d96b82306fd0450c18f7a74895be6d",
"0xbe6de30254b3ecce544caa4839e769e39afa081d16d47e612c95f5264d847c21",
"0xe9f4026dcb0775eb61501f89e35a05ba70b7180c32d830eb382f10268366fcfb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


