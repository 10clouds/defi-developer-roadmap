# Forking

Forking is initiating an instance that forks the mainnet. This means that it will simulate having the same state as the mainnet, but will act as a local development network. In this way, you can interact with deployed protocols and test complex interactions locally.

This allows to significatly simplify development process. For example you don't have to mock WETH or Uniswap contracts if your main contracts have logic that includes them, you just simply fork the network and have those contracts locally.

<ResourceGroupTitle>Free Content</ResourceGroupTitle>
<BadgeLink colorScheme='yellow' badgeText='Read' href='https://hardhat.org/hardhat-network/docs/guides/forking-other-networks'>Hardhat forking docs</BadgeLink>
<BadgeLink badgeText='Watch' href='https://www.youtube.com/watch?v=9X78nFqJwCM'>Fork Mainnet for easy smart contract testing
</BadgeLink>
