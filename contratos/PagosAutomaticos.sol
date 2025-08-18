// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRegistroUsuarios {
    function estaRegistrado(address usuario) external view returns (bool);

    function obtenerPrestamista() external view returns (address); // <--- esto
}

contract PagosAutomaticos {
    IRegistroUsuarios registroUsuarios;
    event PagoRealizado(address prestatario, uint256 monto);

    constructor(address _registroUsuarios) {
        registroUsuarios = IRegistroUsuarios(_registroUsuarios);
    }

    // Función para que el prestatario pague directamente
    function cobrarPago(uint256 cuotaEsperada) external payable returns (bool) {
        require(msg.value == cuotaEsperada, "Debes enviar el monto exacto de la cuota");
        payable(registroUsuarios.obtenerPrestamista()).transfer(msg.value);
        emit PagoRealizado(msg.sender, msg.value);
        return true;
    }
}
