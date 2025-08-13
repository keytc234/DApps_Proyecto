// 📌 Direcciones y ABIs reales después de desplegar
const registroUsuariosAddress = "0x123...";
const registroUsuariosABI = [ /* ABI RegistroUsuarios */];

const gestionPrestamoAddress = "0x456...";
const gestionPrestamoABI = [ /* ABI GestionPrestamo */];

const pagosAutomaticosAddress = "0x789...";
const pagosAutomaticosABI = [ /* ABI PagosAutomaticos */];

let web3;
let accounts;
let registroUsuarios;
let gestionPrestamo;
let pagosAutomaticos;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await ethereum.request({ method: 'eth_requestAccounts' });
        accounts = await web3.eth.getAccounts();

        registroUsuarios = new web3.eth.Contract(registroUsuariosABI, registroUsuariosAddress);
        gestionPrestamo = new web3.eth.Contract(gestionPrestamoABI, gestionPrestamoAddress);
        pagosAutomaticos = new web3.eth.Contract(pagosAutomaticosABI, pagosAutomaticosAddress);

        console.log("Conectado a la cuenta:", accounts[0]);
    } else {
        alert("Por favor instala MetaMask");
    }
});

// 📌 Registrar usuario
document.getElementById("btnRegistrar").addEventListener("click", async () => {
    await registroUsuarios.methods.registrarUsuario()
        .send({ from: accounts[0] });
    alert("Usuario registrado");
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

    await pagosAutomaticos.methods.depositar()
        .send({ from: accounts[0], value: monto });

    alert("Depósito realizado");
});

// 📌 Pagar cuota
document.getElementById("btnPagar").addEventListener("click", async () => {
    const idPrestamo = document.getElementById("inputIdPrestamo").value;

    await gestionPrestamo.methods.pagarCuota(idPrestamo)
        .send({ from: accounts[0] });

    alert("Cuota pagada");
});

// 📌 Aplicar penalización
document.getElementById("btnPenalizar").addEventListener("click", async () => {
    const idPrestamo = document.getElementById("inputIdPenal").value;
    const montoPenal = web3.utils.toWei(document.getElementById("inputMontoPenal").value, "ether");

    await gestionPrestamo.methods.aplicarPenalizacion(idPrestamo, montoPenal)
        .send({ from: accounts[0] });

    alert("Penalización aplicada");
});
