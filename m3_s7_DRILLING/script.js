const vehiculo = {
  marca: "Peakauto",
  modelo: "Goenx",
  motor: {
    tipoDeMotor: "4 CILINDROS EN LÍNEA"
    ,bloqueDelMotor: "ALEACIÓN/ALUMINIO"
    ,desplazamiento: "1.99 / 1996"
    ,caballosDeFuerza: "155 @ 6500"
    ,lineaRoja: 6_700
    ,inyeccionDeCombustible: "PUNTOS MÚLTIPLES"
  }
}

let tipoDeMotor;
let presionDeSobrealimentacion;
let bloqueDelMotor;
let desplazamiento;
let caballosDeFuerza;
let lineaRoja;
let sistemaSmartAssist;
let inyeccionDeCombustible;
let encendidoRemotoDelMotor;

tipoDeMotor ??= vehiculo?.motor?.tipoDeMotor;
presionDeSobrealimentacion ??= vehiculo?.motor?.presionDeSobrealimentacion;
bloqueDelMotor ??= vehiculo?.motor?.bloqueDelMotor;
desplazamiento ??= vehiculo?.motor?.desplazamiento; 
caballosDeFuerza ??= vehiculo?.motor?.caballosDeFuerza;
lineaRoja ??= vehiculo?.motor?.lineaRoja;
sistemaSmartAssist ??= vehiculo?.motor?.sistemaSmartAssist;
inyeccionDeCombustible ??= vehiculo?.motor?.inyeccionDeCombustible;
encendidoRemotoDelMotor ??= vehiculo?.motor?.encendidoRemotoDelMotor;

console.log(tipoDeMotor);
console.log(presionDeSobrealimentacion);
console.log(bloqueDelMotor);
console.log(desplazamiento);
console.log(caballosDeFuerza);
console.log(lineaRoja);
console.log(sistemaSmartAssist);
console.log(inyeccionDeCombustible);
console.log(encendidoRemotoDelMotor);
