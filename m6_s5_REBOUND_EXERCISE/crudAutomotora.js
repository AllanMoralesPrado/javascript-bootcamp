const fs = require('fs/promises');
const errorMessages = {
    invalidArgs: `Debe ingresar uno de los siguientes comandos disponibles:
    
    node crudAutomotora.js <nombreAuto> <propiedad> <valor>
    node crudAutomotora.js leer [nombreAuto]`,
    invalidProperty: `propiedad no válida`
};

/**
 * Lee un archivo de texto formato JSON para devolver información de todos los autos registrados o solo las características de uno en particular
 * @param {String} [nombreAuto] - Nombre del automovil
 * @returns {Object} Información de todos los autos registrados si no se proporciona un nombre de automóvil,
 *                   o las características del automóvil específico,
 *                   o "Auto no registrado" si no se encuentra el automóvil.
 * @throws {Error} Si ocurre un error al leer el archivo
 */
const leer = async (nombreAuto = undefined) => {
    try{
        const datos = await fs.readFile('autos.txt', 'utf-8');
        const datosJSON = JSON.parse(datos);
        if(nombreAuto == undefined) return datosJSON;
        return (datosJSON.hasOwnProperty(nombreAuto) ? datosJSON[nombreAuto]:'Auto no registrado');
    }catch(err){
        console.error(err.message);
        throw new Error('Error al leer el archivo');
    }
};

/**
 * Modifica el valor de una propiedad previamente definida de un auto específico que ya debe estar registrado
 * @param {String} nombreAuto - Nombre del automóvil
 * @param {String} propiedad - Característica específica del automóvil
 * @param {String} valor - Valor asignado a la propiedad
 * @returns {String} - 'Datos actualizados con éxito' si la propiedad existe
 *                      o 'Auto no registrado' si nombreAuto no es un dato válido
 * @throws {Error} Si ocurre un error al leer o escribir en el archivo
 */
const modificar = async (nombreAuto, propiedad, valor) => {
    try{
        const datos = await fs.readFile('autos.txt', 'utf-8');
        const datosJSON = JSON.parse(datos);
        if(datosJSON.hasOwnProperty(nombreAuto)) {
            datosJSON[nombreAuto][propiedad] = (propiedad === 'asientos') ? parseInt(valor):valor;
            await fs.writeFile('autos.txt', JSON.stringify(datosJSON, null, 2), 'utf-8');
            return 'Datos actualizados con éxito';
        }
        return 'Auto no registrado';
    }catch(err){
        console.error(err.message);
        throw new Error('Error al leer o escribir en el archivo');
    }
};

/**
 * Menu automático para validar los argumentos ingresados por consola y proceder según las condiciones
 * @param {Array} args - Array de argumentos
 * @throws {Error} Si los argumentos son inválidos o si se produce un error en la ejecución
 */
const menuAuto = (args) => {
    const [command, ...restArgs] = args;
    if(command === 'leer' && restArgs.length !== 2) { 
        leer(...restArgs)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err.message);
            });
    }
    else if(command !== 'leer' && restArgs.length === 2) { 
        const propiedad = restArgs[0];
        const propiedades = ['modelo', 'asientos'];
        if(!propiedades.includes(propiedad)){
            throw new Error(errorMessages.invalidProperty);
        }
        modificar(...args)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err.message);
        }); 
    }
    else { 
        throw new Error(errorMessages.invalidArgs);
    }
};

/**
 * Ejecución inicial del código: valida la cantidad de argumentos ingresados
 * @throws {Error} - Si ocurre un error al ingresar una cantidad no válida de argumentos
 */
const init = () => {
    const validLength = [1,2,3];
    try{
        const args = process.argv.slice(2);
        if(!validLength.includes(args.length)) {
            throw new Error(errorMessages.invalidArgs);
        }
        menuAuto(args);
    }catch(err){
        console.error(err.message);
    }
};

init();