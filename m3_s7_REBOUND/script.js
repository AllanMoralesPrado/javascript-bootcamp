/** Método String.prototype.replaceAll() */

// DOM: captura del elemento parrafo que contiene el texto
const texto = document.querySelector('p');

// Contador de ocurrencias de las palabras
let sed = 0;
let vehicula = 0;
let vivamus = 0;
let nam = 0;
let eros = 0;
let vestibulum = 0;
let quam = 0;
let sollicitudin = 0;
let finibus = 0;
let dictum = 0;
let morbi = 0;

// REGEX OR/NOT CASE SENSITIVE/GLOBAL AND EXACTLY MATCH
patron = /\b(sed|vehicula|vivamus|nam|eros|vestibulum|quam|sollicitudin|finibus|dictum|morbi)\b/gi;

// Actualizar DOM y contabilizar ocurrencias
texto.innerHTML = texto.innerHTML.replaceAll(patron, (match) => {
  if(match === 'sed') {sed += 1; return '<b>UNO</b>';}
  if(match === 'vehicula') {vehicula += 1; return '<b>DOS</b>'};
  if(match === 'vivamus') {vivamus +=1; return '<b>TRES</b>';}
  if(match === 'nam') {nam += 1; return '<b>CUATRO</b>';}
  if(match === 'eros') {eros += 1; return '<b>CINCO</b>';}
  if(match === 'vestibulum') {vestibulum += 1; return '<b>SEIS</b>';}
  if(match === 'quam') {quam += 1; return '<b>SIETE</b>';}
  if(match === 'sollicitudin') {sollicitudin += 1; return '<b>OCHO</b>';}
  if(match === 'finibus') {finibus += 1; return '<b>NUEVE</b>';}
  if(match === 'dictum') {dictum += 1; return '<b>DIEZ</b>';}
  if(match === 'morbi') {morbi += 1; return '<b>ONCE</b>';}
})

// Verificación de las ocurrencias
sed ||= (sed == 6);
vehicula ||= (vehicula == 4);
vivamus ||= (vivamus == 3);
nam ||= (nam == 3);
eros ||= (eros == 2);
vestibulum ||= (vestibulum == 2);
quam ||= (quam == 2);
sollicitudin ||= (sollicitudin == 2);
finibus ||= (finibus == 2);
dictum ||= (dictum == 2);
morbi ||= (morbi == 2);

// Contadores por consola
console.log(`%csed: ${sed}`,'color: #FF5500');
console.log(`%cvehicula: ${vehicula}`,'color: #FF99B2');
console.log(`%cvivamus: ${vivamus}`,'color: #FF99F5');
console.log(`%cnam: ${nam}`,'color: #BB99FF');
console.log(`%ceros: ${eros}`,'color: #99C5FE');
console.log(`%cvestibulum: ${vestibulum}`,'color: #00CEFF');
console.log(`%cquam: ${quam}`,'color: #01FFFE');
console.log(`%csollicitudin: ${sollicitudin}`,'color: #00FF9F');
console.log(`%cfinibus: ${finibus}`,'color: #B6FF01');
console.log(`%cdictum: ${dictum}`,'color: #FFFF00');
console.log(`%cmorbi: ${morbi}`,'color: #FFB600');
