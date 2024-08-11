// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol, uint256 initialSupply)
        ERC20(name, symbol) Ownable(msg.sender)
    {
        _mint(msg.sender, initialSupply);
    }

    // Sobrescribimos la función de transferencia para que solo el owner pueda transferir tokens
    function transfer(address to, uint256 amount) public override onlyOwner returns (bool) {
        return super.transfer(to, amount);
    }

    // Sobrescribimos la función transferFrom para que solo el owner pueda transferir tokens desde otra cuenta
    function transferFrom(address from, address to, uint256 amount) public override onlyOwner returns (bool) {
        return super.transferFrom(from, to, amount);
    }

}