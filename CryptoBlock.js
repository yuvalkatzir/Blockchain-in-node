const SHA256 = require('crypto-js/sha256');
const bigInt = require('big-integer');

// Helper functions for endian conversion and byte manipulation
function toLittleEndianHex(value) {
    let hex = value.toString(16).padStart(8, '0'); // Convert to hex and pad to 8 chars
    return hex.match(/.{2}/g).reverse().join(''); // Reverse byte order
}

function hexStringToByteArray(hex) {
    let bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return Buffer.from(bytes);
}

function bytesToHex(byteArray) {
    return byteArray.toString('hex');
}

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
        // Concatenate data elements and convert to little-endian format
        let data = toLittleEndianHex(this.index) +
                   toLittleEndianHex(this.precedingHash) +
                   toLittleEndianHex(this.timestamp) +
                   toLittleEndianHex(this.data) +
                   toLittleEndianHex(this.nonce);

        // Convert to byte array and perform double hashing
        let dataBytes = hexStringToByteArray(data);
        let hash = SHA256(dataBytes).toString(); // First hash
        hash = SHA256(hash).toString(); // Double hash

        // Convert hash to little-endian format
        return toLittleEndianHex(hash);
    }

    // Perform proof-of-work to mine the block. The higher the "difficulty" value, the lower the target, and the harder it gets.
    proofOfWork(difficulty) {
        // Calculate the target value based on the difficulty level. Higher difficulty results in a smaller target.
        let target = bigInt(2).pow(256 - difficulty);
        let hashInt = bigInt(this.hash, 16);

        // Continuously increment the nonce until a valid hash is found that meets the target difficulty
        while (hashInt.compare(target) >= 0) {
            this.nonce++;
            this.hash = this.computeHash();
            hashInt = bigInt(this.hash, 16);
        }
    }
}

module.exports = CryptoBlock;