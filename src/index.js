let billeterasVirtuales = ['PayPal', 'MercadoPago', 'Skrill'];
let cuentas = [];

function agregarCuenta(usuarios, billeteras, transacciones){
    cuentas.push([usuarios,billeteras,transacciones]);
    //cuentas.push(usuarios,billeteras,transacciones);
    //console.log(cuentas);
    mostrarCuenta(usuarios,billeteras,transacciones,cuentas);

}

function mostrarCuenta(usuarios,billeteras,transacciones,cuentas){
    console.log(usuarios,billeteras,transacciones);
    document.getElementById("resultado").innerHTML="<p>"+cuentas+"</p>";
    console.log(cuentas);
}

document.getElementById("guardar").onclick = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    let usuarios = document.getElementById("usuario").value;
    let billeteras = document.getElementById("billetera").value;
    let transacciones = Number(document.getElementById("transaccion").value);

    agregarCuenta(usuarios, billeteras, transacciones);

    console.log(cuentas);
}


