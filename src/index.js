let billeterasVirtuales = ['MercadoPago', 'Modo', 'Uala', 'NaranjaX', 'PayPal', 'Skrill'];
let cuentas = [];

function agregarCuenta(usuarios, billeteras, transacciones) {
    let cuentaExistente = cuentas.find((cuenta) => //Verifica si la cuenta ya ha sido creada
        cuenta.usuario === usuarios && cuenta.billetera === billeteras
    );

    if(cuentaExistente){ //Si la cuenta ya existe suma las transacciones
        cuentaExistente.transacciones += transacciones;
    }else{ //Si no existe se crea y agrega al array 
        cuentas.push({usuario: usuarios,billetera: billeteras,transacciones: transacciones});
    }

    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML= '<h3>LISTADO DE CUENTAS: </h3>';

    cuentas.forEach((cuenta) => {
        lista.innerHTML += `<p>${cuenta.usuario} ${cuenta.billetera} ${cuenta.transacciones}</p>`
    });
}

function mostrarTransacciones(){
    let listaTransacciones=document.getElementById("listaTransacciones");
    listaTransacciones.innerHTML="<h3>BILLETERAS CON MÁS TRANSACCIONES: </h3>";

    if (cuentas.length === 0) {
        document.getElementById("listaTransacciones").innerHTML = "<p>No hay cuentas registradas.</p>";
        return;
    }

    //agrupar cuentas por usuario
    const usuariosAgrupados = {};

    cuentas.forEach(cuenta => {
        if (!usuariosAgrupados[cuenta.usuario]) {
            usuariosAgrupados[cuenta.usuario] = [];
        }
        usuariosAgrupados[cuenta.usuario].push(cuenta);
    });

    const resultado = [];

    for (const usuario in usuariosAgrupados) {
        const cuentasDelUsuario = usuariosAgrupados[usuario];
        
        let maxTransaccion = cuentasDelUsuario[0]; // Asumimos que el primer objeto es el máximo

        for (let i = 1; i < cuentasDelUsuario.length; i++) {
            if (cuentasDelUsuario[i].transacciones > maxTransaccion.transacciones) {
                maxTransaccion = cuentasDelUsuario[i]; // Actualizamos el máximo
            }
        }

        const maxCount = cuentasDelUsuario.filter(cuenta => cuenta.transacciones === maxTransaccion.transacciones);
        
        resultado.push(maxCount[0]); // Solo se añade la primera cuenta que cumpla la condición
    }

    resultado.forEach(cuenta => {
        listaTransacciones.innerHTML += `<p>Usuario: ${cuenta.usuario}, Billetera: ${cuenta.billetera}, Transacciones: ${cuenta.transacciones}</p>`;
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

document.getElementById("maxTransacciones").onclick=(event)=>{
    event.preventDefault();

    mostrarTransacciones();
}