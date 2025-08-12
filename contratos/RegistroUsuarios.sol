// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroUsuarios {
    mapping(address => bool) public usuariosRegistrados;

    event UsuarioRegistrado(address usuario);

    function registrarUsuario() external {
        require(!usuariosRegistrados[msg.sender], "Usuario ya registrado");
        usuariosRegistrados[msg.sender] = true;
        emit UsuarioRegistrado(msg.sender);
    }

    function estaRegistrado(address usuario) external view returns (bool) {
        return usuariosRegistrados[usuario];
    }
}