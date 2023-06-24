// ---- index.js ----

const fs = require('fs/promises');
const axios = require('axios');

/**
 * Función que devuelve un número entero aleatorio entre el 0 y otro número positivo mayor que ese valor
 * @param {Number} tamanioArray - número entero
 * @returns {Number} - número entero aleatorio entre el 0 y otro número positivo mayor que ese valor
 */
const indiceBusquedaAzar = (tamanioArray) => Math.floor(Math.random() * tamanioArray - 1);

const accion = async () => {
    try{
        const datos = await fs.readFile('datos.txt');
        const datosParse = JSON.parse(datos);
        const numeroArray = Math.abs(indiceBusquedaAzar(datosParse.length));
        console.log(datosParse[numeroArray]);

        const urls = await fs.readFile('urls.txt');
        const urlsParse = JSON.parse(urls);
        for(link of urlsParse){
            const call = await axios.get(link);
            console.log(call);
        }
    }catch(err){
        console.log(err.message);
    }
}

accion();