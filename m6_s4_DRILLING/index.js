const axios = require('axios');
const pokemons = require('./datosPkmn/datos').pokemons;
//const urls = require('./datosRandom/random');

/**
 * Función que devuelve un número entero aleatorio entre el 0 y otro número positivo mayor que ese valor
 * @param {Number} tamanioArray - número entero
 * @returns {Number} - número entero aleatorio entre el 0 y otro número positivo mayor que ese valor
 */
const indiceBusquedaAzar = (tamanioArray) => Math.floor(Math.random() * tamanioArray - 1);

const datosPokemon = async (nombrePkmn) => {
    try{
        //console.log(pokemons);
        const resultado = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePkmn}`);
        let pokemon = resultado.data;
        console.log(`GOTCHA!\n# ${pokemon.id} - ${pokemon.name}\nTipo: ${pokemon.types[0].type.name}\nAltura: ${pokemon.height}\nPeso: ${pokemon.weight} Kg\n`);
    }catch(err){
        console.error(err.message);
    }
}

datosPokemon(pokemons[indiceBusquedaAzar(pokemons.length)]);