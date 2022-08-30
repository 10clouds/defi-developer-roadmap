# Compilation

Before deploying smart contract, we need to compile solidity code to Bytecode for EVM(Ethereum Virtual Machine). You got two stuff after compiling solidity code:

- Bytecode/EVM code
- ABI(Application Binary Interface)

At compilation code is translated into [evm-opcodes](https://github.com/crytic/evm-opcodes). For compilation we use [solc](https://github.com/ethereum/solc-js)

<ResourceGroupTitle>Free Content</ResourceGroupTitle>
<BadgeLink colorScheme='yellow' badgeText='Read' href='https://ethereum.org/en/developers/docs/smart-contracts/compiling/'>Compiling Smart Contracts</BadgeLink>
<BadgeLink colorScheme='yellow' badgeText='Read' href='https://docs.soliditylang.org/en/v0.8.16/using-the-compiler.html'>Using the Compiler</BadgeLink>
