// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RegistroUsuarios {
    // Mapeo para verificar si una dirección está registrada.
    mapping(address => bool) public usuariosRegistrados;
    
    // Dirección del prestamista, asignada una sola vez.
    address public prestamista;
    
    // Bandera para asegurar que solo haya un prestamista.
    bool public prestamistaAsignado;

    // Eventos para el seguimiento de la actividad.
    event UsuarioRegistrado(address usuario);
    event PrestamistaAsignado(address prestamista);

    function registrarUsuario() external {
        // Valida que el usuario no esté ya registrado.
        require(!usuariosRegistrados[msg.sender], "Usuario ya registrado");
        
        usuariosRegistrados[msg.sender] = true;

        // Asigna al primer usuario como prestamista.
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