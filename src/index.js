let billeterasVirtuales = ['PayPal', 'MercadoPago', 'Skrill'];
let cuentas = [];

function agregarCuenta(usuarios, billeteras, transacciones) {
    let cuentaExistente = cuentas.some((cuenta) => //Verifica si la cuenta ya ha sido creada
        cuenta.usuario === usuarios && cuenta.billetera === billeteras
    );

    if(cuentaExistente){ //Si la cuenta ya existe no permite crearla
        alert("La cuenta ya existe");
    }else{ //Si no existe se crea y agrega al array 
        cuentas.push({usuario: usuarios,billetera: billeteras,transacciones: transacciones});
        mostrarLista();
    }
}

function mostrarLista() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML= '<h3>Listado de Cuentas</h3>';

    cuentas.forEach((cuenta) => {
        resultado.innerHTML += `<p>${cuenta.usuario} ${cuenta.billetera} ${cuenta.transacciones}</p>`
    });
}

function mostrarTransacciones(){
    let resultado=document.getElementById("resultado");
    resultado.innerHTML="<h3>Billeteras con más transacciones</h3>";
    if (cuentas.length === 0) {
        document.getElementById("resultado").innerHTML = "<p>No hay cuentas registradas.</p>";
        return;
    }

    let maxTransacciones = cuentas.reduce((prev, current) => {
        return (prev.transacciones > current.transacciones) ? prev : current;
    });

    resultado.innerHTML += `<p>Usuario con más transacciones: ${maxTransacciones.usuario}. Billetera:${maxTransacciones.billetera} (${maxTransacciones.transacciones} transacciones)</p>`;
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