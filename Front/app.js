const registroUsuariosAddress = "0x754C1536EF0d1B13FF6A84737FaF6d7E57ef42FC";
const registroUsuariosABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "prestamista",
				"type": "address"
			}
		],
		"name": "PrestamistaAsignado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "usuario",
				"type": "address"
			}
		],
		"name": "UsuarioRegistrado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "usuario",
				"type": "address"
			}
		],
		"name": "esPrestamista",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "usuario",
				"type": "address"
			}
		],
		"name": "estaRegistrado",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "obtenerPrestamista",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "prestamista",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "prestamistaAsignado",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registrarUsuario",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "usuariosRegistrados",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const gestionPrestamoAddress = "0x638A27a4B3021fF7887B5fa0dc8A10491107841a";
const gestionPrestamoABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_registroUsuarios",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_pagosAutomaticos",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_fondosPrestamista",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_auditoria",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "prestatario",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "plazo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "multa",
				"type": "uint256"
			}
		],
		"name": "crearPrestamo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pagarCuota",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "prestamos",
		"outputs": [
			{
				"internalType": "address",
				"name": "prestatario",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "saldoPendiente",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "plazo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cuotaMensual",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "pagosRealizados",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nextDueDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "porcentajeMulta",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "activo",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const pagosAutomaticosAddress = "0x1EafaaB555BF0a06f049328ec564779273813D78";
const pagosAutomaticosABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_registroUsuarios",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "prestatario",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			}
		],
		"name": "PagoRealizado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cuotaEsperada",
				"type": "uint256"
			}
		],
		"name": "cobrarPago",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	}
]

const fondoPrestamistaAddress = "0x1144BfCFA1a404B5a13eBbAD3A5C4C0EB0959bDC";
const fondoPrestamistaABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_registroUsuarios",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "prestamista",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			}
		],
		"name": "FondosDepositados",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "destinatario",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			}
		],
		"name": "FondosTransferidos",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "depositarFondos",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "saldo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "destinatario",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "monto",
				"type": "uint256"
			}
		],
		"name": "transferirFondos",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let web3;
let accounts;
let registroUsuarios;
let gestionPrestamo;
let pagosAutomaticos;
let fondoPrestamista;

// Espera a que el documento esté completamente cargado antes de ejecutar cualquier código
window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            accounts = await web3.eth.getAccounts();

            registroUsuarios = new web3.eth.Contract(registroUsuariosABI, registroUsuariosAddress);
            gestionPrestamo = new web3.eth.Contract(gestionPrestamoABI, gestionPrestamoAddress);
            pagosAutomaticos = new web3.eth.Contract(pagosAutomaticosABI, pagosAutomaticosAddress);
            fondoPrestamista = new web3.eth.Contract(fondoPrestamistaABI, fondoPrestamistaAddress);

            console.log("Conectado a la cuenta:", accounts[0]);

            // Mueve la lógica de los botones aquí dentro
            // 📌 Registrar usuario
            document.getElementById("btnRegistrar").addEventListener("click", async () => {
                try {
                    const accounts = await ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length === 0) {
                        alert("No hay ninguna cuenta activa en MetaMask");
                        return;
                    }
                    await registroUsuarios.methods.registrarUsuario().send({ from: accounts[0] });
                    alert("Usuario registrado con la cuenta activa en MetaMask");
                } catch (error) {
                    console.error(error);
                    alert("Error al registrar el usuario");
                }
            });

            // 📌 Crear préstamo
            document.getElementById("btnCrearPrestamo").addEventListener("click", async () => {
                try {
                    const accounts = await ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length === 0) {
                        alert("No hay ninguna cuenta activa en MetaMask");
                        return;
                    }
                    const prestatario = document.getElementById("inputPrestatario").value;
                    const montoETH = document.getElementById("inputMonto").value;
                    const plazo = document.getElementById("inputPlazo").value;
                    const multa = document.getElementById("inputMulta").value;
                    const montoWei = web3.utils.toWei(montoETH, "ether");
                    await gestionPrestamo.methods.crearPrestamo(prestatario, montoWei, plazo, multa).send({ from: accounts[0] });
                    alert("Préstamo creado");
                } catch (error) {
                    console.error(error);
                    alert("Error al crear el préstamo");
                }
            });

            // 📌 Pagar cuotas
            document.getElementById("btnPagar").addEventListener("click", async () => {
                try {
                    const accounts = await ethereum.request({ method: 'eth_accounts' });
                    if (accounts.length === 0) {
                        alert("No hay ninguna cuenta activa en MetaMask");
                        return;
                    }
                    const prestatario = accounts[0];
                    const prestamo = await gestionPrestamo.methods.prestamos(prestatario).call();
                    const cuotaWei = prestamo.cuotaMensual;
                    const cuotaETH = web3.utils.fromWei(cuotaWei, 'ether');
                    await gestionPrestamo.methods.pagarCuota().send({ from: prestatario, value: cuotaWei });
                    alert(`Cuota de ${cuotaETH} ETH pagada exitosamente.`);
                } catch (error) {
                    console.error(error);
                    alert("Error al pagar la cuota. Asegúrate de tener un préstamo activo y el monto suficiente.");
                }
            });


document.getElementById("btnDepositarPrestamista").addEventListener("click", async () => {
  try {
    // 📌 Mejor práctica: Solicitar conexión primero, luego obtener las cuentas
    // Esto asegura que la billetera esté conectada antes de continuar
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length === 0) {
      alert("Por favor, conecta tu cuenta de MetaMask.");
      return;
    }

    const montoETH = document.getElementById("inputMontoPrestamista").value;
    if (!montoETH || parseFloat(montoETH) <= 0) {
      alert("Por favor, ingresa un monto válido (mayor que 0).");
      return;
    }

    // Convertir el monto de ETH a Wei, asegurando que sea un string
    const montoWei = web3.utils.toWei(montoETH.toString(), 'ether');

    // 📌 El objeto 'value' en el método 'send' es lo que transfiere el ETH
    await fondoPrestamista.methods.depositarFondos().send({
      from: accounts[0],
      value: montoWei
    });

    alert(`¡Transacción exitosa! Se han depositado ${montoETH} ETH.`);

  } catch (error) {
    console.error("Error al depositar fondos:", error);
    alert("Error al depositar fondos. Asegúrate de que eres el prestamista y que la transacción fue aprobada.");
  }
});
});