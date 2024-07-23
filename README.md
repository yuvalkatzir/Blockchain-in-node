# Simpler Blockchain Implementation in Node.js

## Overview

This project features a simpler implementation of a blockchain in JavaScript, designed for easier testing and educational purposes. It includes a basic proof-of-work (PoW) mechanism with a lower difficulty level. For a more advanced implementation with realistic PoW and higher difficulty levels, please refer to the [advanced branch](https://github.com/yuvalkatzir/Blockchain-in-node/tree/main).

## Features

- **Block Creation**: Includes index, timestamp, data, and preceding block hash.
- **Hashing**: Utilizes SHA-256 for hashing.
- **Proof-of-Work**: Implements a basic PoW algorithm with leading zeros for simplicity.
- **Difficulty Adjustment**: Uses a lower difficulty level for easier testing.

## Implementation Details

- **Hash Computation**: Uses SHA-256 for hash generation with a nonce for PoW.
- **Mining Algorithm**: Employs a straightforward PoW method with a fixed number of leading zeros.
- **Chain Validation**: Ensures blockchain integrity by verifying hashes and preceding hashes.

## Usage

1. **Initialization**: Create an instance of `CryptoBlockchain`.
2. **Add Blocks**: Add and mine blocks using the `addNewBlock` method.
3. **Check Validity**: Verify blockchain integrity with the `checkChainValidity` method.

## Future Enhancements

- **Optimization**: Improve mining efficiency and performance.
- **Feature Expansion**: Explore more advanced blockchain features and integrations.

## Conclusion

This simpler version provides an easy-to-understand demonstration of blockchain technology, ideal for educational purposes and initial testing. For a more sophisticated version, see the [advanced branch](https://github.com/yuvalkatzir/Blockchain-in-node/tree/main).
