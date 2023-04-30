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
function mayor(numero1, numero2){
    return (numero1 > numero2) ? numero1:numero2;
}

let numero1;
let numero2;

let option = parseInt(prompt(`Seleccione que desea hacer:
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
            alert(`La suma de los números ${numero1} y ${numero2} es ${suma(numero1,numero2)}`)
            break;
        case 3:
            alert(`La resta de los números ${numero1} y ${numero2} es ${resta(numero1,numero2)}`)
            break;
        case 4:
            alert(`El producto de los números ${numero1} y ${numero2} es ${multiplicacion(numero1,numero2)}`)
            break;
        case 5:
            alert(`El cociente entre los números ${numero1} y ${numero2} es ${division(numero1,numero2)}`)
            break;
        case 6:
            alert(`Has ingresado los siguientes números: ${numero1} y ${numero2}`)
            break;
        default:
            break;
    }
    alert("Gracias por participar");
} else{
    alert(`${(option == 7) ? "Gracias por participar":"Elección incorrecta. Adios!"}`);
}