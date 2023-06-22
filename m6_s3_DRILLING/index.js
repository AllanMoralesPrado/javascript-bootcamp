
// ---- lodash
const _ = require('lodash');

//---- index.js ----
const { pantalla, procesador, versiones, camara_frontal, camaras_traseras, bateria, sistema_operativo, conectividad, otros, fecha_registro } = require('./celular').galaxyA11;

const galaxyA11_extended = require('./celular').galaxyA11_extended;

let describir = () => {
    console.log(`
    Pantalla: ${pantalla}
    Procesador: ${procesador}
    Versiones: ${versiones}
    Cámara frontal: ${camara_frontal}
    Cámaras traseras: ${camaras_traseras}
    Batería: ${bateria}
    Sistema Operativo: ${sistema_operativo}
    Conectividad: ${conectividad}
    Otros: ${otros}
    Fecha Registro: ${fecha_registro}\n`);
}

describir();

_.forIn(galaxyA11_extended, (value, key) => {
    console.log(`${key}:${value}`);
});