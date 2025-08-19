// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./RegistroUsuarios.sol";

interface IRegistroUsuarios {
    function esPrestamista(address usuario) external view returns (bool);
}

contract FondosPrestamista {
    IRegistroUsuarios registroUsuarios;

    event FondosDepositados(address prestamista, uint256 monto);
    event FondosTransferidos(address destinatario, uint256 monto);

    constructor(address _registroUsuarios) {
        registroUsuarios = IRegistroUsuarios(_registroUsuarios);
    }

    // Restringe el acceso solo al prestamista.
    modifier soloPrestamista() {
        require(registroUsuarios.esPrestamista(msg.sender), "No eres el prestamista");
        _;
    }

    // Permite al prestamista depositar ETH. 'payable' es clave.
    function depositarFondos() external payable soloPrestamista {
        require(msg.value > 0, "Debes enviar ETH");
        emit FondosDepositados(msg.sender, msg.value);
    }

    // Permite transferir fondos a un prestatario.
    function transferirFondos(address destinatario, uint256 monto) external {
        // En una app real, se validaría que el llamador sea GestionPrestamo.
        require(address(this).balance >= monto, "Saldo insuficiente del prestamista");
        
        // Transfiere el ETH.
        payable(destinatario).transfer(monto);
        emit FondosTransferidos(destinatario, monto);
    }

    function saldo() external view returns (uint256) {
        return address(this).balance;
    }
}