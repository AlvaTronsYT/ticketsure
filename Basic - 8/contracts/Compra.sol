// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenSale is Ownable {
    MyToken public token;
    uint256 public tokenPrice; // El precio del token en wei (o la unidad de la moneda base en Avalanche)

    // Evento para registrar las compras
    event TokensPurchased(address buyer, uint256 amountPaid, uint256 tokensBought);

    constructor(MyToken _token, uint256 _tokenPrice) Ownable (msg.sender) {
        token = _token;
        tokenPrice = _tokenPrice;
    }

    // Permite comprar tokens pagando una cantidad en AVAX
    function buyTokens() public payable {
        require(msg.value > 0, "Debes enviar algo de AVAX");
        
        // Calcula la cantidad de tokens a comprar
        uint256 tokensToBuy = msg.value / tokenPrice;
        require(token.balanceOf(address(this)) >= tokensToBuy, "No hay suficientes tokens en el contrato");

        // Envía los tokens al comprador
        token.transfer(msg.sender, tokensToBuy);

        // Envía el AVAX al owner
        payable(owner()).transfer(msg.value);

        emit TokensPurchased(msg.sender, msg.value, tokensToBuy);
    }

    // Permite al owner ajustar el precio del token
    function setTokenPrice(uint256 _tokenPrice) public onlyOwner {
        tokenPrice = _tokenPrice;
    }

    // Permite al owner retirar tokens del contrato (por si hay tokens sobrantes)
    function withdrawTokens(uint256 amount) public onlyOwner {
        require(token.balanceOf(address(this)) >= amount, "No hay suficientes tokens en el contrato");
        token.transfer(owner(), amount);
    }

    // Permite al owner retirar AVAX del contrato
    function withdrawAVAX(uint256 amount) public onlyOwner {
        payable(owner()).transfer(amount);
    }

    // Fallback function para recibir AVAX
    receive() external payable {
        buyTokens();
    }
}