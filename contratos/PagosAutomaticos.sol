// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PagosAutomaticos {
    mapping(address => uint256) public balances;

    event PagoRealizado(address prestatario, uint256 monto);

    // Función para que prestatario deposite fondos antes de pagar cuotas
    function depositar() external payable {
        balances[msg.sender] += msg.value;
    }

    // Esta función la llama GestionPrestamo para cobrar la cuota
    function cobrarPago(address prestatario, uint256 monto)
        external
        returns (bool)
    {
        require(balances[prestatario] >= monto, "Fondos insuficientes");
        balances[prestatario] -= monto;
        emit PagoRealizado(prestatario, monto);
        return true;
    }
}
