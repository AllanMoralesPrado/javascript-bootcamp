## Javascript FullStack Web Development
### Módulo 6, Sesión 3 - ACTUALIZACIONES A ECMASCRIPT

# REBOUND EXERCISE: CREANDO VARIABLES, FUNCIONES Y OBJETOS 

### EJERCICIO

- Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea porque la definición es al interior de una función, de un bloque o fuera de ellos.

    SOLUCIÓN
    ```javascript
    // ---- index.js ----
    // Creación de tres variables

    const constante = "no cambia";
    var variable;

    let funcion = () => {
        let numero = 5;
    }

    console.log(constante);
    console.log(variable);
    console.log(numero); // ERROR DE SCOPE DE LA VARIABLE
    ```
- Crear una función utilizando el formato tradicional con la palabra clave function, y luego volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración dentro de una variable. La función debe recibir, al menos, dos argumentos.

    SOLUCIÓN

    ```javascript
    /**
     * Función que devuelve la suma de dos números
     * @param {Number} num1 - Primer operando
     * @param {Number} num2 - Segundo operando
     * @returns {Number} - Suma de los operandos
     */
    function suma(num1, num2){
        return num1 + num2;
    }

    /**
     * Función ES6 que devuelve la suma de dos números
     * @param {Number} num1 - Primer operando
     * @param {Number} num2 - Segundo operando
     * @returns {Number} - Suma de los operandos
     */
    let sumaes6 = (num1, num2) => num1 + num2
    ```
- Crear una función similar a la del ejercicio, utilizando esta vez un objeto con características de algún animal, que contenga, al menos, cinco pares de llave - valor. Utilizar template literals para escribir un texto empleando los valores del objeto, y  Destructuring para definir los valores del objeto dentro de la función.

    SOLUCIÓN

    ```javascript
    /**
     * Función que muestra por pantalla los datos de un animal
     * @param {Object} animal - Objeto Animal con sus datos generales
     */
    let infoAnimal = (animal) => {
        let {
            nombre,
            estructura_vertebral,
            alimentacion,
            habitat,
            habito,
            reproduccion
        } = animal;
        console.log(`Animal: ${nombre}
        Estructura vertebral: ${estructura_vertebral}
        Alimentación: ${alimentacion}
        Hábitat: ${habitat}
        Hábito: ${habito}
        Reproducción: ${reproduccion}`);
    }

    // Objeto perro
    const perro = {
        nombre: "perro",
        estructura_vertebral: "vertebrado",
        alimentacion: "carnívoro",
        hábitat: "terrestre",
        habito: "diurno",
        reproduccion: "vivíparo"
    }
    ```
- Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread operator; actualizar dos campos, y añadir dos nuevos.

    SOLUCIÓN

    ```javascript
    // Objeto perro_plus: versión extendida del objeto perro
    const perro_plus = {...perro, libertad: "doméstico", nombre_cientifico: "canis familiaris"}
    ```

- Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.

    SOLUCIÓN

    ```javascript
    // Array con los valores del objeto perro_plus
    let valores_perro_plus = Object.values(perro_plus);

    // Iteración para mostrar los valores de valores_perro_plus
    for(valor of valores_perro_plus){
        console.log(valor);
    }
    ```