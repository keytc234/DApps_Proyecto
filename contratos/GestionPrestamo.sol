// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importamos los contratos completos.
import "./Auditoria.sol";
import "./FondosPrestamista.sol";
import "./RegistroUsuarios.sol";

// Interfaces para los contratos de los que solo necesitamos la definición de sus funciones.
interface IPagosAutomaticos {
    function cobrarPago(uint256 cuotaEsperada) external payable returns (bool);
}

interface IFondosPrestamista {
    function transferirFondos(address destinatario, uint256 monto) external;
}

interface IAuditoria {
    function registrarPago(address prestatario, uint256 monto) external;

    function registrarPenalizacion(address prestatario, uint256 monto) external;

    function crearPrestamo(address prestatario, uint256 monto) external;

    function crearFinalizacion(address prestatario) external;
}

contract GestionPrestamo {
    RegistroUsuarios registroUsuarios;
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
        uint256 tasaInteres;
        bool activo;
    }

    mapping(address => Prestamo) public prestamos;

    constructor(
        address _registroUsuarios,
        address _pagosAutomaticos,
        address _fondosPrestamista,
        address _auditoria
    ) {
        registroUsuarios = RegistroUsuarios(_registroUsuarios);
        pagosAutomaticos = IPagosAutomaticos(_pagosAutomaticos);
        fondosPrestamista = IFondosPrestamista(_fondosPrestamista);
        auditoria = IAuditoria(_auditoria);
    }

    modifier soloPrestamista() {
        require(
            registroUsuarios.esPrestamista(msg.sender),
            "Solo el prestamista puede crear prestamos"
        );
        _;
    }

    function crearPrestamo(
        address prestatario,
        uint256 monto,
        uint256 plazo,
        uint256 multa,
        uint256 interes
    ) external soloPrestamista {
        require(
            registroUsuarios.estaRegistrado(prestatario),
            "Prestatario no registrado"
        );
        require(
            monto > 0 && plazo > 0 && multa > 0 && interes > 0,
            "Datos invalidos"
        );
        require(
            !prestamos[prestatario].activo,
            "Este prestatario ya tiene un prestamo activo"
        );

        fondosPrestamista.transferirFondos(prestatario, monto);

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
            tasaInteres: interes,
            activo: true
        });
        auditoria.crearPrestamo(prestatario, monto);
    }

    // Función para que el prestatario pague su propia cuota.
    function pagarCuota() external payable {
        // Obtenemos los datos del préstamo del prestatario que llama a la función (msg.sender).
        Prestamo storage p = prestamos[msg.sender];
        require(p.activo, "Prestamo no activo");
        require(p.saldoPendiente >= p.cuotaMensual, "Prestamo ya pagado");

        if (block.timestamp > p.nextDueDate) {
            uint256 diasAtraso = (block.timestamp - p.nextDueDate) / 1 days;
            uint256 multa = (p.saldoPendiente *
                p.porcentajeMulta *
                diasAtraso) / 100;
            p.saldoPendiente += multa;
            auditoria.registrarPenalizacion(msg.sender, multa);
        }

        uint256 intereses = (p.cuotaMensual * p.tasaInteres) / 100;
        uint256 totalAPagar = p.cuotaMensual + intereses;

        bool pagado = pagosAutomaticos.cobrarPago{value: msg.value}(
            totalAPagar
        );
        require(pagado, "Pago fallido");

        p.saldoPendiente -= p.cuotaMensual;
        p.pagosRealizados++;
        p.nextDueDate += 30 days;

        if (p.saldoPendiente == 0) {
            p.activo = false;
            auditoria.crearFinalizacion(msg.sender);
        }
        auditoria.registrarPago(msg.sender, totalAPagar);
    }
}
