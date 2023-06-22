## Javascript FullStack Web Development
### Módulo 6, Sesión 3 - ACTUALIZACIONES A ECMASCRIPT

# DRILLING: CELULAR

### EJERCICIO
- Comienza un nuevo proyecto con npm init, instalando los paquetes moment y lodash.

    SOLUCIÓN

    ```
    npm init && npm i moment lodash
    ```
- Revisa la documentación para saber cómo requerirlos en tu programa. Asegúrate de utilizar la palabra clave constant.

    SOLUCIÓN

    ```javascript
    // ---- Propuesta de moment.js para Node.js
    var moment = require('moment'); // require

    // ---- Propuesta de lodash para Node.js
    var _ = require('lodash');
    ```
    Seguramente utilizan `var` para que funcione en navegadores antiguos. Se utilizará `const` en su lugar:

    ```javascript
    // ---- moment
    const moment = require('moment');

    // ---- lodash
    const _ = require('lodash');
    ```
- Crea un nuevo archivo llamado `celular.js`, que contenga y exporte un objeto. El objeto debe tener como contenido pares llave - valor de, por lo menos, cinco características de tu celular, más un sexto ítem que contenga una fecha generada por moment.

    SOLUCIÓN
    ```cmd
    copy nul "celular.js"
    ```
    ```javascript
    // ---- celular.js ----
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

    module.exports = {
        galaxyA11:galaxyA11
    }
    ```
- Importa el objeto en tu archivo `index.js`, utilizando la desestructuración de objetos.

    SOLUCIÓN
    
    ```cmd
    copy nul "index.js"
    ```

    ```javascript
    //---- index.js ----
    const { pantalla, procesador, versiones, camara_frontal, camaras_traseras, bateria, sistema_operativo, conectividad, dimensiones, peso, otros, fecha_registro } = require('./celular');

    ```
- Crea una función que muestre por pantalla la descripción de tu celular, utilizando template literals, y las variables recogidas del objeto importado desde el archivo `celular.js`. 

    SOLUCIÓN

    ```javascript
    // ---- index.js ----
    //...
    let describir = () => {
        console.log(`Pantalla: ${pantalla}
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
    ```
- Crea una copia del objeto en celular.js, y actualiza dos de sus propiedades utilizando el spread operator.

    SOLUCIÓN

    ```javascript
    // ---- celular.js ----
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
    ```
- Escribe un ejemplo de función de callback (puedes utilizar las revisadas en el primer y segundo CUE), pero esta vez utilizando la sintaxis de función de flecha.

    SOLUCIÓN

    ```javascript
    // ---- index.js ----

    //... 
    const { pantalla, procesador, versiones, camara_frontal, camaras_traseras, bateria, sistema_operativo, conectividad, otros, fecha_registro } = require('./celular').galaxyA11;

    const galaxyA11_extended = require('./celular').galaxyA11_extended;
    
    _.forIn(galaxyA11_extended, (value, key) => {
        console.log(`${key}:${value}\n`);
    });
    ```