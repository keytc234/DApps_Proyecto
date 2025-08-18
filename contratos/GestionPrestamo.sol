// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRegistroUsuarios {
    function estaRegistrado(address usuario) external view returns (bool);
}

interface IPagosAutomaticos {
    function cobrarPago(uint256 cuotaEsperada) external payable returns (bool);
}

interface IFondosPrestamista {
    function retirarFondos(address destinatario, uint256 monto) external;
}

interface IAuditoria {
    function registrarPago(address prestatario, uint256 monto) external;

    function registrarPenalizacion(address prestatario, uint256 monto) external;

    function crearPrestamo(address prestatario, uint256 monto) external;

    function crearFinalizacion(address prestatario) external;
}

contract GestionPrestamo {
    IRegistroUsuarios registroUsuarios;
    IPagosAutomaticos pagosAutomaticos;
    IFondosPrestamista fondosPrestamista;
    IAuditoria auditoria;

    struct Prestamo {
        address prestatario;
        uint256 monto;
        uint256 saldoPendiente;
        uint256 plazo; // en meses
        uint256 cuotaMensual;
        uint256 pagosRealizados;
        uint256 nextDueDate;
        uint256 porcentajeMulta;
        bool activo;
    }

    mapping(address => Prestamo) public prestamos;

    constructor(
        address _registroUsuarios,
        address _pagosAutomaticos,
        address _fondosPrestamista,
        address _auditoria
    ) {
        registroUsuarios = IRegistroUsuarios(_registroUsuarios);
        pagosAutomaticos = IPagosAutomaticos(_pagosAutomaticos);
        fondosPrestamista = IFondosPrestamista(_fondosPrestamista);
        auditoria = IAuditoria(_auditoria);
    }

    function crearPrestamo(
        address prestatario,
        uint256 monto,
        uint256 plazo,
        uint256 multa
    ) external {
        require(
            registroUsuarios.estaRegistrado(prestatario),
            "Prestatario no registrado"
        );
        require(monto > 0 && plazo > 0, "Datos invalidos");
        require(!prestamos[msg.sender].activo, "Ya tienes un prestamo activo");

        fondosPrestamista.retirarFondos(prestatario, monto);

        uint256 cuota = monto / plazo;

        prestamos[prestatario] = Prestamo({
            prestatario: prestatario,
            monto: monto,
            saldoPendiente: monto,
            plazo: plazo,
            cuotaMensual: cuota,
            pagosRealizados: 0,
            nextDueDate: block.timestamp + 30 days,
            porcentajeMulta: multa,
            activo: true
        });
        auditoria.crearPrestamo(prestatario, monto);
    }

    function pagarCuota() external {
        Prestamo storage p = prestamos[msg.sender];
        require(p.activo, "Prestamo no activo");
        require(p.saldoPendiente >= p.cuotaMensual, "Prestamo ya pagado");

        if (block.timestamp > p.nextDueDate) {
            uint256 multa = (p.saldoPendiente * p.porcentajeMulta) / 100;
            p.saldoPendiente += multa;
            auditoria.registrarPenalizacion(msg.sender, multa);
        }

        bool pagado = pagosAutomaticos.cobrarPago(p.cuotaMensual);
        require(pagado, "Pago fallido");

        p.saldoPendiente -= p.cuotaMensual;
        p.pagosRealizados++;
        p.nextDueDate += 30 days;
        // Si pagó todo
        if (p.saldoPendiente == 0) {
            p.activo = false;
            auditoria.crearFinalizacion(msg.sender);
        }
        auditoria.registrarPago(msg.sender, p.cuotaMensual);
    }
}
