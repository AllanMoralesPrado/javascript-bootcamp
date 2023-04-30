let numero1 = parseInt(prompt("Ingrese primer número: "));
let numero2 = parseInt(prompt("Ingrese segundo número: "));
let proposicion = (numero1 > numero2) ? " es mayor que " : numero1 < numero2 ? " es menor que " : " es igual que ";


alert(numero1 + `${proposicion}` + numero2);