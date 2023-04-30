/*

M2_S8_REBOUND_EXERCISE

Considerando los conocimientos adquiridos durante esta CUE, vamos a continuar trabajando con el menú que realizamos en la clase anterior.
Vamos a hacer que el menú se repita una y otra vez hasta que el usuario ingrese la opción 7 “salir”.
Mientras eso no ocurra, podrá seguir navegando por el menú.
Además, sabemos que no se puede dividir por cero, por lo que validaremos, para el caso de una división, que esta no sea por cero.
Si el usuario ingreso cero, solicitaremos nuevamente que ingrese los datos.

*/

/**
 * Devuelve la suma entre dos números enteros
 * @param {Number} numero1 - Primer número entero ingresado por el usuario
 * @param {Number} numero2 - Segundo número entero ingresado por el usuario
 * @returns {Number} resultado - Representa la suma entre numero1 y numero2
 */

function suma(numero1, numero2) {
    resultado = numero1 + numero2;
    return resultado;
}

/**
 * Devuelve la diferencia entre dos números enteros
 * @param {Number} numero1 - Primer número entero ingresado por el usuario
 * @param {Number} numero2 - Segundo número entero ingresado por el usuario
 * @returns {Number} resultado - Representa la diferencia entre numero1 y numero2
 */

function resta(numero1, numero2) {
    resultado = numero1 - numero2;
    return resultado;
}

/**
 * Devuelve el producto entre dos números enteros
 * @param {Number} numero1 - Primer número entero ingresado por el usuario
 * @param {Number} numero2 - Segundo número entero ingresado por el usuario
 * @returns {Number} resultado - Representa el producto entre numero1 y numero2
 */

function multiplicacion(numero1, numero2) {
    resultado = numero1 * numero2;
    return resultado;
}

/**
 * Devuelve el cociente entre dos números enteros
 * @param {Number} numero1 - Primer número entero ingresado por el usuario
 * @param {Number} numero2 - Segundo número entero ingresado por el usuario
 * @returns {Number} resultado - Representa el cociente entre numero1 y numero2
 */

function division(numero1, numero2) {
    resultado = numero1 / numero2;
    return resultado;
}

/**
 * Devuelve el valor del número entero mayor
 * @param {Number} numero1 - Primer número entero ingresado por el usuario
 * @param {Number} numero2 - Segundo número entero ingresado por el usuario
 * @returns {Boolean} Devuelve numero1 si este es mayor que numero2, o este último por el contrario
 */

function mayor(numero1, numero2){
    return (numero1 > numero2) ? numero1:numero2;
}

/* VARIABLES */
let numero1;
let numero2;
let option;

/* INTERACCIÓN CON EL USUARIO */
do{
    option = parseInt(prompt(`Seleccione que desea hacer:
    1.- Calcular cual número es mayor
    2.- Sumar
    3.- Restar
    4.- Multiplicar
    5.- Dividir
    6.- Mostrar los números ingresados
    7.- Salir
    `));
    
    if(option >= 1 && option <= 6){
        numero1 = parseInt(prompt("Ingrese el primer número: "));
        numero2 = parseInt(prompt("Ingrese el segundo número: "));
        
        switch(option){
            case 1:
                alert(`El número mayor ingresado es el ${mayor(numero1,numero2)}`);
                break;
            case 2:
                alert(`La suma de los números ${numero1} y ${numero2} es ${suma(numero1,numero2)}`);
                break;
            case 3:
                alert(`La resta de los números ${numero1} y ${numero2} es ${resta(numero1,numero2)}`);
                break;
            case 4:
                alert(`El producto de los números ${numero1} y ${numero2} es ${multiplicacion(numero1,numero2)}`);
                break;
            case 5:
                while(true){
                    try{
                        if(numero2 === 0){
                            throw new Error("ADVERTENCIA!\nHa ingresado la opción 5: división.\n"
                            + "Entonces el segundo número ingresado no puede ser cero.\n"
                            + "Por favor intente nuevamente.");
                        }
                        alert(`El cociente entre los números ${numero1} y ${numero2} es ${division(numero1,numero2)}`);
                        break;
                    }
                    catch(error){
                        alert(`${error.message}`);
                        numero2 = parseInt(prompt("División (reintento). Ingrese el segundo número: "));
                    }
                }
                break;
            case 6:
                alert(`Has ingresado los siguientes números: ${numero1} y ${numero2}`);
                break;
            default:
                break;
        }
        alert("Gracias por participar");
    } else{
        alert(`${(option == 7) ? "Gracias por participar":"Elección incorrecta. Para salir, ingrese 7."}`);
    }
}while(option !== 7);