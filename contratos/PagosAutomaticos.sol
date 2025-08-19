// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RegistroUsuarios.sol";

interface IRegistroUsuarios {
    function estaRegistrado(address usuario) external view returns (bool);
    function obtenerPrestamista() external view returns (address);
}

contract PagosAutomaticos {
    IRegistroUsuarios registroUsuarios;

    event PagoRealizado(address prestatario, uint256 monto);

    constructor(address _registroUsuarios) {
        registroUsuarios = IRegistroUsuarios(_registroUsuarios);
    }

    // Permite al prestatario enviar ETH para pagar su cuota.
    function cobrarPago(uint256 cuotaEsperada) external payable returns (bool) {
        require(msg.value == cuotaEsperada, "Debes enviar el monto exacto de la cuota");

        // Transfiere el pago al prestamista.
        payable(registroUsuarios.obtenerPrestamista()).transfer(msg.value);
        emit PagoRealizado(msg.sender, msg.value);
        return true;
    }
}