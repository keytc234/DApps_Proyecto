// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroUsuarios {
    mapping(address => bool) public usuariosRegistrados;
    address public prestamista;
    bool public prestamistaAsignado; // Bandera para saber si ya existe prestamista

    event UsuarioRegistrado(address usuario);
    event PrestamistaAsignado(address prestamista);

    function registrarUsuario() external {
        require(!usuariosRegistrados[msg.sender], "Usuario ya registrado");
        usuariosRegistrados[msg.sender] = true;

        // Si es el primer usuario, lo asignamos como prestamista
        if (!prestamistaAsignado) {
            prestamista = msg.sender;
            prestamistaAsignado = true;
            emit PrestamistaAsignado(msg.sender);
        }

        emit UsuarioRegistrado(msg.sender);
    }

    function estaRegistrado(address usuario) external view returns (bool) {
        return usuariosRegistrados[usuario];
    }

    function esPrestamista(address usuario) external view returns (bool) {
        return usuario == prestamista;
    }

    function obtenerPrestamista() external view returns (address) {
        return prestamista;
    }
}
