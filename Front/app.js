const registroUsuariosAddress = "0xc5aAd8ca909341710AfD1E425a50361cC80a7B60";
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

const gestionPrestamoAddress = "0xeFB1D8F6aD70Ea651779e21bAC0720059b5927B9";
const gestionPrestamoABI = [
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
			},
			{
				"internalType": "uint256",
				"name": "interes",
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
				"internalType": "uint256",
				"name": "tasaInteres",
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
];

const pagosAutomaticosAddress = "0x68a16b2a0E93E64c7aEB8304f6A2febCa8feb4be";
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

const fondoPrestamistaAddress = "0xE21684Bf3d12F6c94492a258f7755Fc631a8D3b0";
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

			document.getElementById("btnRegistrar").addEventListener("click", async () => {
				try {
					const currentAccounts = await ethereum.request({ method: 'eth_accounts' });
					if (currentAccounts.length === 0) {
						alert("No hay ninguna cuenta activa en MetaMask");
						return;
					}

					const isRegistered = await registroUsuarios.methods.estaRegistrado(currentAccounts[0]).call();
					if (isRegistered) {
						alert("Este usuario ya está registrado.");
						return;
					}

					await registroUsuarios.methods.registrarUsuario().send({ from: currentAccounts[0] });
					alert("Usuario registrado con la cuenta activa en MetaMask");
				} catch (error) {
					console.error(error);
					alert("Error al registrar el usuario");
				}
			});

			document.getElementById("btnMontoActual").addEventListener("click", async () => {
				try {
					const currentAccounts = await ethereum.request({ method: 'eth_accounts' });
					if (currentAccounts.length === 0) {
						alert("No hay ninguna cuenta activa en MetaMask");
						return;
					}

					const isRegistered = await registroUsuarios.methods.esPrestamista(currentAccounts[0]).call();
					if (isRegistered) {
						const saldoWei = await fondoPrestamista.methods.saldo().call();
						const saldoETH = web3.utils.fromWei(saldoWei, "ether");
						document.getElementById("montoActual").innerText = `Monto Actual: ${saldoETH} ETH`;
					}
				} catch (error) {
					console.error(error);
					alert("Error al registrar el usuario");
				}
			});

			document.getElementById("btnCrearPrestamo").addEventListener("click", async () => {
				try {
					const currentAccounts = await ethereum.request({ method: 'eth_accounts' });
					if (currentAccounts.length === 0) {
						alert("No hay ninguna cuenta activa en MetaMask");
						return;
					}
					const prestatario = document.getElementById("inputPrestatario").value;
					const montoETH = document.getElementById("inputMonto").value;
					const plazo = document.getElementById("inputPlazo").value;
					const multa = document.getElementById("inputMulta").value;
					const intereses = document.getElementById("inputInteres").value;
					const montoWei = web3.utils.toWei(montoETH, "ether");
					await gestionPrestamo.methods.crearPrestamo(prestatario, montoWei, plazo, multa, intereses).send({ from: currentAccounts[0] });
					alert("Préstamo creado");
				} catch (error) {
					console.error(error);
					alert("Error al crear el préstamo");
				}
			});

			document.getElementById("btnPagar").addEventListener("click", async () => {
				try {
					const currentAccounts = await ethereum.request({ method: 'eth_accounts' });
					if (currentAccounts.length === 0) {
						alert("No hay ninguna cuenta activa en MetaMask");
						return;
					}
					const prestatario = currentAccounts[0];
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
					const currentAccounts = await ethereum.request({ method: 'eth_accounts' });
					if (currentAccounts.length === 0) {
						alert("Por favor, conecta tu cuenta de MetaMask.");
						return;
					}

					const montoETH = document.getElementById("inputMontoPrestamista").value;
					if (!montoETH || parseFloat(montoETH) <= 0) {
						alert("Por favor, ingresa un monto válido (mayor que 0).");
						return;
					}

					const montoWei = web3.utils.toWei(montoETH.toString(), 'ether');

					await fondoPrestamista.methods.depositarFondos().send({
						from: currentAccounts[0],
						value: montoWei
					});

					alert(`¡Transacción exitosa! Se han depositado ${montoETH} ETH.`);

				} catch (error) {
					console.error("Error al depositar fondos:", error);
					alert("Error al depositar fondos. Asegúrate de que eres el prestamista y que la transacción fue aprobada.");
				}
			});

			document.getElementById("btnVerPrestamo").addEventListener("click", async () => {
				try {
					const currentAccounts = await ethereum.request({ method: 'eth_accounts' });
					if (currentAccounts.length === 0) return;

					// Llamar a la función prestamos(address) del contrato
					const prestamo = await gestionPrestamo.methods.prestamos(currentAccounts[0]).call();

					if (!prestamo.activo) {
						document.getElementById("infoPrestamo").innerText = "No tienes préstamos activos.";
						return;
					}

					// Mostrar los datos del préstamo en HTML
					document.getElementById("infoPrestamo").innerHTML = `
            <p>Prestatario: ${prestamo.prestatario}</p>
            <p>Monto total: ${web3.utils.fromWei(prestamo.monto, 'ether')} ETH</p>
            <p>Saldo pendiente: ${web3.utils.fromWei(prestamo.saldoPendiente, 'ether')} ETH</p>
            <p>Plazo: ${prestamo.plazo} meses</p>
            <p>Cuota mensual: ${web3.utils.fromWei(prestamo.cuotaMensual, 'ether')} ETH</p>
            <p>Pagos realizados: ${prestamo.pagosRealizados}</p>
            <p>Próximo pago: ${new Date(prestamo.nextDueDate * 1000).toLocaleDateString()}</p>
            <p>Porcentaje de multa: ${prestamo.porcentajeMulta}%</p>
            <p>Tasa de interés: ${prestamo.tasaInteres}%</p>
        `;
				} catch (error) {
					console.error("Error al cargar préstamo:", error);
				}
			});
		} catch (error) {
			console.error("Error al conectar a MetaMask:", error);
		}
	} else {
		alert("Por favor, instala MetaMask.");
	}
});