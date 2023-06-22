// ---- index.js ----
var datos = require('./datos');
// cargar lodash
// Load the full build.
var _ = require('lodash');

// Obtener Array con elementos únicos de la variable 'autos'
let autos = datos.autos;
let autos_unicos = _.uniq(autos);
console.log(`Autos únicos: ${autos_unicos}`);

// Obtener al primer animal de tipo salvaje que se encuentre la variable 'animales'
let animales = datos.animales;
// El método find devuelve el primer elemento que haga que el callback devuelva true
let animal_salvaje = _.find(animales, function (o) { return o.tipo === 'salvaje'; });

if (animal_salvaje) {
    console.log('\nAnimal salvaje encontrado:');
    console.log(`${animal_salvaje.animal} - ${animal_salvaje.nombre}`);
} else {
    console.log('No se encontraron animales salvajes.');
}
