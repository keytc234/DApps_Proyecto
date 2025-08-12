// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Penalizaciones {
    mapping(address => uint256) public multas;

    event PenalizacionAplicada(address prestatario, uint256 monto);

    function aplicarPenalizacion(address prestatario, uint256 monto) external {
        multas[prestatario] += monto;
        emit PenalizacionAplicada(prestatario, monto);
    }
}
