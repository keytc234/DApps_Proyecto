// 📌 Direcciones y ABIs reales después de desplegar
const registroUsuariosAddress = "0xcC5F6255fD1F7B7083C7753414A83ac43d2eF5dA";
const registroUsuariosABI = [
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

const gestionPrestamoAddress = "0x73dC051e0F1c856676E34B36cfc290B06D677576";
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
				"name": "_penalizaciones",
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
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
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
		"name": "PrestamoCreado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "montoPenalizacion",
				"type": "uint256"
			}
		],
		"name": "aplicarPenalizacion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
			}
		],
		"name": "crearPrestamo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "pagarCuota",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
				"internalType": "bool",
				"name": "activo",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "siguienteId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const pagosAutomaticosAddress = "0xF1a771D76d5312D303956C5986185754E7518dE4";
const pagosAutomaticosABI = [
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
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
				"name": "prestatario",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "monto",
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
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositar",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

const penalizacionesAddress = "0x065D0066a75a87415e46B627ab63FEb8879dDDc4";
const penalizacionesABI = [
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
		"name": "PenalizacionAplicada",
		"type": "event"
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
			}
		],
		"name": "aplicarPenalizacion",
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
		"name": "multas",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let web3;
let accounts;
let registroUsuarios;
let gestionPrestamo;
let pagosAutomaticos;
let penalizaciones;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await ethereum.request({ method: 'eth_requestAccounts' });
        accounts = await web3.eth.getAccounts();

        registroUsuarios = new web3.eth.Contract(registroUsuariosABI, registroUsuariosAddress);
        gestionPrestamo = new web3.eth.Contract(gestionPrestamoABI, gestionPrestamoAddress);
        pagosAutomaticos = new web3.eth.Contract(pagosAutomaticosABI, pagosAutomaticosAddress);
        penalizaciones = new web3.eth.Contract(penalizacionesABI, penalizacionesAddress);

        console.log("Conectado a la cuenta:", accounts[0]);
    } else {
        alert("Por favor instala MetaMask");
    }
});

// 📌 Registrar usuario
document.getElementById("btnRegistrar").addEventListener("click", async () => {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length === 0) {
            alert("No hay ninguna cuenta activa en MetaMask");
            return;
        }

        // accounts[0] es la cuenta que el usuario tiene seleccionada en MetaMask
        await registroUsuarios.methods.registrarUsuario()
            .send({ from: accounts[0] });

        alert("Usuario registrado con la cuenta activa en MetaMask");
    } catch (error) {
        console.error(error);
        alert("Error al registrar el usuario");
    }
});

// 📌 Crear préstamo
document.getElementById("btnCrearPrestamo").addEventListener("click", async () => {
    const prestatario = document.getElementById("inputPrestatario").value;
    const monto = web3.utils.toWei(document.getElementById("inputMonto").value, "ether");
    const plazo = document.getElementById("inputPlazo").value;

    await gestionPrestamo.methods.crearPrestamo(prestatario, monto, plazo)
        .send({ from: accounts[0] });

    alert("Préstamo creado");
});

// 📌 Depositar fondos para pagar cuotas
document.getElementById("btnDepositar").addEventListener("click", async () => {
    const monto = web3.utils.toWei(document.getElementById("inputMontoDeposito").value, "ether");

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length === 0) {
        alert("No hay ninguna cuenta activa en MetaMask");
        return;
    }

    await pagosAutomaticos.methods.depositar()
        .send({ from: accounts[0], value: monto });

    alert("Depósito realizado");
});

// 📌 Pagar cuotas
document.getElementById("btnPagar").addEventListener("click", async () => {
    const idPrestamo = document.getElementById("inputIdPrestamo").value;

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length === 0) {
        alert("No hay ninguna cuenta activa en MetaMask");
        return;
    }

    await gestionPrestamo.methods.pagarCuota(idPrestamo)
        .send({ from: accounts[0] });

    alert("Cuota pagada");
});

// 📌 Aplicar penalización
document.getElementById("btnPenalizar").addEventListener("click", async () => {
    const idPrestamo = document.getElementById("inputIdPenal").value;
    const montoPenal = web3.utils.toWei(document.getElementById("inputMontoPenal").value, "ether");

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length === 0) {
        alert("No hay ninguna cuenta activa en MetaMask");
        return;
    }

    await gestionPrestamo.methods.aplicarPenalizacion(idPrestamo, montoPenal)
        .send({ from: accounts[0] });

    alert("Penalización aplicada");
});