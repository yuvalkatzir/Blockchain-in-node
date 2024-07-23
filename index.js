const CryptoBlockchain = require('./CryptoBlockchain');

// Initialize the blockchain with a default difficulty of 4
let cometCoin = new CryptoBlockchain(4);

// Add new blocks to the blockchain
cometCoin.addNewBlock({ sender: "Yuval", recipient: "Tamir", quantity: 4 });
cometCoin.addNewBlock({ sender: "Yuval", recipient: "Almog", quantity: 10 });

// Log the blockchain with better formatting
console.log("Blockchain:");
console.log(JSON.stringify(cometCoin, null, 4));

// Check and log the validity of the blockchain
console.log("Is blockchain valid? " + cometCoin.checkChainValidity());
