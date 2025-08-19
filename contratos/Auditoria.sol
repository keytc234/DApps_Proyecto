// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auditoria {
    // Eventos para el registro de acciones.
    event RegistroPago(address prestatario, uint256 monto, uint256 timestamp);
    event RegistroPenalizacion(
        address prestatario,
        uint256 monto,
        uint256 timestamp
    );
    event PrestamoCreado(address prestatario, uint256 monto);
    event PrestamoFinalizado(address prestatario);

    // Funciones que solo emiten eventos, sin cambiar el estado.
    function registrarPago(address prestatario, uint256 monto) external {
        emit RegistroPago(prestatario, monto, block.timestamp);
    }

    function registrarPenalizacion(address prestatario, uint256 monto)
        external
    {
        emit RegistroPenalizacion(prestatario, monto, block.timestamp);
    }

    function crearPrestamo(address prestatario, uint256 monto) external {
        emit PrestamoCreado(prestatario, monto);
    }

    function crearFinalizacion(address prestatario) external {
        emit PrestamoFinalizado(prestatario);
    }
}