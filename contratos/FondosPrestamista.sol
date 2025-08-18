// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRegistroUsuarios {
    function estaRegistrado(address usuario) external view returns (bool);
}

contract FondosPrestamista {

    IRegistroUsuarios registroUsuarios;
    event FondosDepositados(address prestamista, uint256 monto);
    event FondosRetirados(address contrato, uint256 monto);

    constructor(address _registroUsuarios) {
        registroUsuarios = IRegistroUsuarios(_registroUsuarios);
    }

    modifier soloPrestamista() {
        require(registroUsuarios.estaRegistrado(msg.sender), "No eres prestamista");
        _;
    }

    // El prestamista deposita ETH al contrato
    function depositarFondos() external payable soloPrestamista {
        require(msg.value > 0, "Debes enviar ETH");
        emit FondosDepositados(msg.sender, msg.value);
    }

    // Consultar saldo del contrato
    function saldo() external view returns (uint256) {
        return address(this).balance;
    }

    function retirarFondos(address destinatario, uint256 monto) external {
        require(address(this).balance >= monto, "Saldo insuficiente");
        payable(destinatario).transfer(monto);
        emit FondosRetirados(destinatario, monto);
    }
}
