// ---- main.js ----
const config = require('./config');
const utils = require('./utils');
// paquete casual
const casual = require('casual');
// paquete faker
const { faker } = require('@faker-js/faker');

// Datos de prueba de casual y faker
const country = casual.country;
const month = faker.date.month();

// Prueba de casual y faker
console.log(utils.concatenate(country, month, config.booleano));

// Prueba de variable externa booleano
config.booleano = true;
console.log(utils.concatenate(country, month, config.booleano));