const CryptoBlock = require('./CryptoBlock');

class CryptoBlockchain {
    constructor(difficulty = 2) {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = difficulty; // Store difficulty level
    }

    startGenesisBlock() {
        return new CryptoBlock(0, "23/07/2024", "Initial Block in the Chain", "0");
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    addNewBlock(data) {
        const latestBlock = this.obtainLatestBlock();
        const newBlock = new CryptoBlock(
            latestBlock.index + 1, // Automatically increment the index
            new Date().toISOString(), // Use current timestamp
            data,
            latestBlock.hash
        );
        newBlock.proofOfWork(this.difficulty); // Ensure block is mined
        this.blockchain.push(newBlock);
    }

    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];

            // Check if the current block's hash is valid
            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }

            // Check if the current block's precedingHash matches the preceding block's hash
            if (currentBlock.precedingHash !== precedingBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

module.exports = CryptoBlockchain;