const SHA256 = require('crypto-js/sha256');

class CryptoBlock {
    constructor(index, timestamp, data, precedingHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.nonce = 0; // Add nonce initialization
        this.hash = this.computeHash();
    }

    computeHash() {
        return SHA256(
            this.index +
            this.precedingHash +
            this.timestamp +
            JSON.stringify(this.data) +
            this.nonce
        ).toString();
    }
      

    // Perform proof-of-work to mine the block. The higher the "difficulty" value, the lower the target, and the harder it gets.
    proofOfWork(difficulty) {
        while (
            this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
        ) {
            this.nonce++;
            this.hash = this.computeHash();
        }
    }
}

module.exports = CryptoBlock;