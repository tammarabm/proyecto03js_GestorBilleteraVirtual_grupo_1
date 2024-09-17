let billeterasVirtuales = ['PayPal', 'MercadoPago', 'Skrill'];
let cuentas = [];

function agregarCuenta(usuarios, billeteras, transacciones){
    cuentas.push({
        usuario: usuarios,
        billetera: billeteras,
        transacciones: transacciones
    });
}

document.getElementById("guardar").onclick = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    let usuarios = document.getElementById("usuario").value;
    let billeteras = document.getElementById("billetera").value;
    let transacciones = Number(document.getElementById("transaccion").value);

    agregarCuenta(usuarios, billeteras, transacciones);

    console.log(cuentas);
}


