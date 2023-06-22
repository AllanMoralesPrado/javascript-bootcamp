// ---- index.js ----

// Creación de tres variables

const constante = "no cambia";
var variable;

let funcion = () => {
    let numero = 5;
}

console.log(constante);
console.log(variable);
//console.log(numero); // ERROR DE SCOPE DE LA VARIABLE

// CREACIÓN DE LA FUNCION CON ES5 y ES6

/**
 * Función que devuelve la suma de dos números
 * @param {Number} num1 - Primer operando
 * @param {Number} num2 - Segundo operando
 * @returns {Number} - Suma de los operandos
 */
function suma(num1, num2){
    return num1 + num2;
}

/**
 * Función ES6 que devuelve la suma de dos números
 * @param {Number} num1 - Primer operando
 * @param {Number} num2 - Segundo operando
 * @returns {Number} - Suma de los operandos
 */
let sumaes6 = (num1, num2) => num1 + num2


/**
 * Función que muestra por pantalla los datos de un animal
 * @param {Object} animal - Objeto Animal con sus datos generales
 */
let infoAnimal = (animal) => {
    let {
        nombre,
        estructura_vertebral,
        alimentacion,
        habitat,
        habito,
        reproduccion
    } = animal;
    console.log(`Animal: ${nombre}
    Estructura vertebral: ${estructura_vertebral}
    Alimentación: ${alimentacion}
    Hábitat: ${habitat}
    Hábito: ${habito}
    Reproducción: ${reproduccion}`);
}

// Objeto perro
const perro = {
    nombre: "perro",
    estructura_vertebral: "vertebrado",
    alimentacion: "carnívoro",
    hábitat: "terrestre",
    habito: "diurno",
    reproduccion: "vivíparo"
}

// Objeto perro_plus: versión extendida del objeto perro
const perro_plus = {...perro, libertad: "doméstico", nombre_cientifico: "canis familiaris"}

// Array con los valores del objeto perro_plus
let valores_perro_plus = Object.values(perro_plus);

// Iteración para mostrar los valores de valores_perro_plus
for(valor of valores_perro_plus){
    console.log(valor);
}