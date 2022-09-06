# Non Reentrant

One of the most common smart contract vulnerability is re-entrancy - which is unexpected re-entering to a smart contract. To mitigate this common issue library was created. To put it short when contract is entered the internal flag is modified so the contract is more aware of execution.

![](https://images.ctfassets.net/v0qht4wq59vi/5le2zpNimBz6j27WCQqVIi/5f3bb297ad3718feaf1f59546257cc8f/contract_a_contract_B.jpeg)

<ResourceGroupTitle>Free Content</ResourceGroupTitle>
<BadgeLink colorScheme='yellow' badgeText='Read' href='https://docs.openzeppelin.com/contracts/4.x/api/security#ReentrancyGuard'>OpenZeppelin ReentrancyGuard</BadgeLink>
<BadgeLink badgeText='Watch' href='https://www.youtube.com/watch?v=4Mm3BCyHtDY'>Reentrancy | Hack Solidity (0.6)
</BadgeLink>
