/* DATOS Y VARIABLES */
const registro = [
    {
        nombre: "Ane Galvan",
        identificador: "12333822",
        clave: "8-pTV2<x",
        saldo: 772316,
    },
    {
        nombre: "Orlando Haro",
        identificador: "23193102",
        clave: "Z9kU[_75",
        saldo: 1123119,
    },
    {
        nombre: "Jose-Antonio Valverde",
        identificador: "44312211",
        clave: "5m#j^3T:",
        saldo: 940166,
    },
    {
        nombre: "Pilar Teruel",
        identificador: "51238792",
        clave: "*u<7=U7C",
        saldo: 1048997,
    },
]

/* Implementación con objetos */
// class Cliente{
//     constructor(nombre, identificador, clave, saldo){
//         this.nombre = nombre;
//         this.identificador = identificador;
//         this.clave = clave;
//         this.saldo = saldo; 
//     }
// }

// var cliente1 = ("Juanito Perez", "87239283", "*u>8=U7C", 545120);

let identificador;
let clave;
let user = false;

/* FUNCIONES */

/**
 * Devuelve un número entero correspondiente a una opción disponible del menú
 * @returns {Numeric} - option es la opción válida elegida por el usuario
 */

function menu(){
    let option;
    let available = [1,2,3,4];
    do{
        option = parseInt(prompt(`Seleccione que desea hacer:
        1.- Ver saldo
        2.- Realizar giro
        3.- Realizar depósito
        4.- Salir
        `));

        if(!(option in available)){
            alert("OPCIÓN INVÁLIDA\n"
            + "Por favor, ingrese una opción disponible.\n"
            + "Para salir, ingrese un 4.");
        }
    }while(!(option in available));
    return option;
}

/**
 * Muestra por pantalla un aviso sobre el saldo actual del usuario autenticado
 * @param {Object} user - Datos bancarios del usuario autenticado
 */

function saldo(user){
    confirm(`Su saldo actual es de ${user['saldo']}`);
}

/**
 * Solicita al usuario ingresar un saldo válido para realizar un giro
 * para después mostrar el saldo disponible actualizado
 * @param {Object} user - Datos bancarios del usuario autenticado
 */

function giro(user){
    saldo_giro = parseInt(prompt(`Su saldo actual es de ${user['saldo']}`
    + "\nIngrese el monto que desea girar:"));
    if(saldo_giro > user['saldo'] || saldo_giro <= 0){
       alert("ERROR DE OPERACIÓN: SALDO INSUFICIENTE O NO INGRESADO CORRECTAMENTE");
    } else{
        user['saldo'] -= saldo_giro;
        confirm(`Giro realizado. Su nuevo saldo es ${user['saldo']}`);
    }
}

/**
 * Solicita al usuario ingresar un saldo válido para realizar un depósito
 * para después mostrar el saldo disponible actualizado
 * @param {Object} user - Datos bancarios del usuario autenticado
 */

function deposito(user){
    saldo_dep = parseInt(prompt(`Su saldo actual es de ${user['saldo']}`
    + "\nIngrese el monto que desea depositar:"));
    if(saldo_dep <= 0){
        alert("ERROR DE OPERACIÓN: SALDO NO INGRESADO CORRECTAMENTE");
     } else{
         user['saldo'] += saldo_dep;
         confirm(`Depósito realizado. Su nuevo saldo es ${user['saldo']}`);
     }
}

/* INTERACCIÓN CON EL USUARIO */

// Mensaje de Bienvenida
confirm("Bienvenido a Banca en Linea");

// Datos solicitados al usuario
identificador = prompt("Ingrese su serie de identificación: ");
clave = prompt(`Identificación: ${identificador}\n\nContraseña: `);

// Validación de datos
for (datos of registro){
    if(identificador == datos['identificador'] && clave == datos['clave']){
        user = datos;
        break;
    }
}

// Condicional de acceso al menú de opciones
if(!user){
    alert("ERROR DE AUTENTICACIÓN\n"
    + "Datos de ingreso incorrectos.\n"
    + "Presione (F5) para actualizar la página");
}else{
    confirm(`Bienvenido/a ${user['nombre']}`);
    let option;
    do{
        option = menu();
        switch(option){
            case 1:
                saldo(user);
                break;
            case 2:
                giro(user);
                break;
            case 3:
                deposito(user);
                break;
            default:
                confirm("Gracias por preferir nuestro servicio.");
                break;
        }
    }while(option!=4);
}