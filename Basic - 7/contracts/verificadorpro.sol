    // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenVerifier {
    address public tokenAddress;

    // Mapea una dirección de wallet a un booleano que indica si ya se verificó
    mapping(address => bool) private _verificationStatus;
    // Mapea una dirección de wallet a un booleano que indica si la wallet ha sido canjeada
    mapping(address => bool) public isRedeemed;

    // Constructor para especificar la dirección del token
    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }

    // Verifica si una wallet tiene un balance positivo del token y marca la verificación
    function verifyAndMark(address wallet) public returns (bool) {
        // Si ya se verificó anteriormente, devuelve false
        if (_verificationStatus[wallet]) {
            return false;
        }

        // Verifica si la wallet tiene un balance positivo del token
        bool hasBalance = hasPositiveBalance(wallet);

        // Si tiene balance, marca como verificado y actualiza el estado de canje
        if (hasBalance) {
            _verificationStatus[wallet] = true;
            isRedeemed[wallet] = true; // Marca como canjeada
            return true;
        }

        // Si no tiene balance, devuelve false
        return false;
    }

    // Verifica si la wallet tiene un balance positivo del token
    function hasPositiveBalance(address wallet) public view returns (bool) {
        IERC20 token = IERC20(tokenAddress);  // Interfaz del token ERC20
        uint256 balance = token.balanceOf(wallet);  // Consulta el balance de la wallet
        return balance > 0;
    }

    // Verifica si la wallet ya ha sido marcada como verificada
    function hasBeenMarked(address wallet) public view returns (bool) {
        return _verificationStatus[wallet];
    }

    // Verifica si la wallet ha sido canjeada
    function hasBeenRedeemed(address wallet) public view returns (bool) {
        return isRedeemed[wallet];
    }
}