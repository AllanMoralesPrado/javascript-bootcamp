// ---- celular.js ----
// ---- moment
const moment = require('moment');

const galaxyA11 = {
    pantalla: "TFT de 6,4 pulgadas HD+ a 720 x 1560 Infinity-O",
    procesador: "Octa Core 1,8 GHz",
    versiones: ["2GB/32GB", "3GB/32GB", "MicroSD hasta 512GB"],
    camara_frontal: "8 megapíxeles f/2.0",
    camaras_traseras: ["13 megapíxeles f/1.8", "5 megapíxeles f/2.2 gran angular", "2 megapíxeles f/2.4 bokeh"],
    bateria: ["4.000 mAh", "Carga rápida de 15W"],
    sistema_operativo: "Android 10 One UI 2.0",
    conectividad: ["4G", "Wi-Fi", "Bluetooth"],
    otros: ["Lector de huellas trasero", "Reconocimiento facial"],
    // fecha creada por moment
    fecha_registro: moment().format()
}

let galaxyA11_extended = {...galaxyA11,
    dimensiones: {
        alto: 161.4,
        ancho: 76.3,
        espesor: 8.0
    },
    peso: 177.0
}

module.exports = {
    galaxyA11:galaxyA11,
    galaxyA11_extended:galaxyA11_extended
}