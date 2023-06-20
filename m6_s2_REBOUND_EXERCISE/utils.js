// ---- utils.js ----
/*
1. Descomentar la siguiente linea para probar la importacion
var config = require("./config");
*/

/**
 * Devuelve la concatenación de dos textos o la longitud de esa concatenación.
 * @param {String} text1 - Primer texto.
 * @param {String} text2 - Segundo texto.
 * @param {Boolean} option - Opción booleana que indica si se devuelve la concatenación o la longitud de la concatenación.
 * @returns {String|Number} - Si option es true, devuelve la concatenación de los textos (String). Si option es false, devuelve la longitud de la concatenación (Number).
 */
const concatenate = (text1, text2, option) => {
    const result = text1 + text2;
    return (option) ? result:result.length;
}

/*
2. Descomentar para probar la importacion de 1.
console.log(concatenate("una"," frase",config.booleano));
*/

module.exports = {
    concatenate: concatenate
}