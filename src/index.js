let billeterasVirtuales = ['PayPal', 'MercadoPago', 'Skrill'];
let nombreUsuarios = [];
let numeroTransacciones = [];

function agregar(usuarios, billeteras, transacciones){
    nombreUsuarios.push(usuarios);
    billeterasVirtuales.includes(billeteras)
    numeroTransacciones.push(transacciones);
}

document.getElementById("guardar").onclick = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    let usuarios = document.getElementById("usuario").value;
    let billeteras = document.getElementById("billetera").value;
    let transacciones = Number(document.getElementById("transaccion").value);

    agregar(usuarios, billeteras, transacciones);

    console.log(usuarios);
    console.log(billeteras);
    console.log(transacciones);
}


