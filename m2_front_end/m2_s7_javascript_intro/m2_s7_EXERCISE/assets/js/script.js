var numero1 = 5;
var numero2 = 10;
var resultado = numero1 + numero2;
console.log(resultado);

var nombre = "Pedro";
//IMPRESION CONCATENADA console.log("esto no se imprime");
console.log(nombre + " dice que el resultado de la suma es: " +
    resultado);


numero1 = prompt("Ingrese el primer número");
console.log(numero1);
numero2 = prompt("Ingrese el segundo número");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

resultado = numero1 + numero2;

alert("La suma de " + numero1 + " + " + numero2 + " es " + resultado);

function suma(numero1, numero2) {
    resultado = numero1 + numero2;
    return resultado;
}
function resta(numero1, numero2) {
    resultado = numero1 - numero2;
    return resultado;
}
function multiplicacion(numero1, numero2) {
    resultado = numero1 * numero2;
    return resultado;
}
function division(numero1, numero2) {
    resultado = numero1 / numero2;
    return resultado;
}

alert("La suma de " + numero1 + " + " + numero2 + " es " + suma(numero1, numero2));

resultado = resta(numero1, numero2);
alert("La resta de " + numero1 + " - " + numero2 + " es " +
    resultado);
