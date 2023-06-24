## Javascript FullStack Web Development
### Módulo 6, Sesión 3 - CÓDIGO ASÍNCRONO

# DRILLING: LLAMADA A UN ARCHIVO JS CON AXIOS

### EJERCICIO

- En  base al  ejercicio anterior,  crea  un nuevo  archivo  de  texto  que  contenga  el  siguiente Array con nombres de Pokémon:

    ```txt
    '["bulbasaur", "ivysaur", "venusaur",  
    "squirtle", "wartortle", "blastoise", 
    "charmander", "charmeleon", "charizard"]'
    ```

- Utiliza el mismo concepto para acceder a un Pokémon aleatorio, y realizar una búsqueda con Axios.

    SOLUCIÓN

    Con base en el ejercicio anterior se realiza lo siguiente:

    1. Instalación de axios

    ```
    npm init && npm install axios
    ``` 
    
    ```javascript
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

        }catch(err){
            console.log(err.message);
        }
    }

    accion();
    ```

- Ingresa  a  https://random-data-api.com/documentation,  para  revisar  la  documentación de la API de random data. Busca, al menos, tres URL y anota estos valores en un archivo de texto en formato json. Utiliza el módulo fs para leerlo desde tu archivo index.js, luego usa  Axios  para  hacer  una  llamada  a  cada  una  de  las  URL,  y  muestra  el  resultado  por consola de manera secuencial.

    SOLUCIÓN

    ```javascript
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
    ```