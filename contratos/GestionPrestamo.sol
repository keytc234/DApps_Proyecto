// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRegistroUsuarios {
    function estaRegistrado(address usuario) external view returns (bool);
} 

interface IPagosAutomaticos {
    function cobrarPago(address prestatario, uint256 monto)
        external
        returns (bool);
}

interface IPenalizaciones {
    function aplicarPenalizacion(address prestatario, uint256 monto) external;
}

contract GestionPrestamo {
    IRegistroUsuarios registroUsuarios;
    IPagosAutomaticos pagosAutomaticos;
    IPenalizaciones penalizaciones;

    struct Prestamo {
        address prestatario;
        uint256 monto;
        uint256 saldoPendiente;
        uint256 plazo; // en meses
        uint256 cuotaMensual;
        uint256 pagosRealizados;
        bool activo;
    }

    mapping(uint256 => Prestamo) public prestamos;
    uint256 public siguienteId;

    event PrestamoCreado(uint256 id, address prestatario, uint256 monto);

    constructor(
        address _registroUsuarios,
        address _pagosAutomaticos,
        address _penalizaciones
    ) {
        registroUsuarios = IRegistroUsuarios(_registroUsuarios);
        pagosAutomaticos = IPagosAutomaticos(_pagosAutomaticos);
        penalizaciones = IPenalizaciones(_penalizaciones);
    }

    function crearPrestamo(
        address prestatario,
        uint256 monto,
        uint256 plazo
    ) external {
        require(
            registroUsuarios.estaRegistrado(prestatario),
            "Prestatario no registrado"
        );
        require(monto > 0 && plazo > 0, "Datos invalidos");

        uint256 cuota = monto / plazo;

        prestamos[siguienteId] = Prestamo({
            prestatario: prestatario,
            monto: monto,
            saldoPendiente: monto,
            plazo: plazo,
            cuotaMensual: cuota,
            pagosRealizados: 0,
            activo: true
        });

        emit PrestamoCreado(siguienteId, prestatario, monto);
        siguienteId++;
    }

    function pagarCuota(uint256 id) external {
        Prestamo storage p = prestamos[id];
        require(p.activo, "Prestamo no activo");
        require(p.saldoPendiente >= p.cuotaMensual, "Prestamo ya pagado");

        bool pagado = pagosAutomaticos.cobrarPago(
            p.prestatario,
            p.cuotaMensual
        );
        require(pagado, "Pago fallido");

        p.saldoPendiente -= p.cuotaMensual;
        p.pagosRealizados++;

        // Si pagó todo
        if (p.saldoPendiente == 0) {
            p.activo = false;
        }
    }

    // Función para aplicar penalización (ejemplo sencillo)
    function aplicarPenalizacion(uint256 id, uint256 montoPenalizacion)
        external
    {
        Prestamo storage p = prestamos[id];
        require(p.activo, "Prestamo no activo");
        penalizaciones.aplicarPenalizacion(p.prestatario, montoPenalizacion);
        p.saldoPendiente += montoPenalizacion;
    }
}
