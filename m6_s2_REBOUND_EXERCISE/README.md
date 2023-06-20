## Javascript FullStack Web Development
### Módulo 6, Sesión 2 - INTRODUCCIÓN AL GESTOR DE PAQUETES NPM

# REBOUND  EXERCISE:  INSTALANDO  PAQUETES,  INICIANDO  PROYECTO  NPM  Y  DIVIDIENDO ARCHIVOS 

### EJERCICIO

- Entra al sitio https://www.npmjs.com/, busca el paquete ***nodemon***, y lee la documentación.  
- En  la  barra  de  búsqueda  de  npm,  ubica  el  término  *fake  data*.  Con  éste  encontrarás  paquetes  que  generan  data  de  pruebas.  Instala,  al  menos,  dos  paquetes  que  generen  datos  falsos,  y  usando  la  documentación,  intenta  hacer  uso  de  éstos  en  un  programa *nodejs*.
- Crea un nuevo proyecto con el comando `npm init`, que contenga un archivo `index.js`, un archivo `utils.js`, y un archivo `config.js`.
- En el archivo `utils.js`, crea una función que devuelva la concatenación de dos cadenas de texto, o el largo de caracteres resultante de la concatenación de las dos cadenas de texto, dependiendo de un valor booleano.  
- En el archivo `config.js`, crea una variable de tipo booleana, expórtala, y haz uso de ella en la función creada en el archivo `utils.js`, para definir si la función retornará las cadenas de texto concatenadas, o el largo de caracteres de la concatenación.  
- Instala en tu proyecto el paquete `Nano ID` (https://www.npmjs.com/package/nanoid), y lee la documentación para generar dos id diferentes (https://github.com/ai nanoid#js), guarda cada valor en una variable independiente.  
- Exporta la función de tu archivo `utils.js`, e invócala  en tu archivo principal `index.js` utilizando los dos id generados.
- Cambia el valor de la variable booleana en el archivo `config.js`, para variar el resultado de tu programa.

## SOLUCIÓN

url de nodemon: https://www.npmjs.com/package/nodemon
```
> npm i nodemon
```
Instalación de generadores de datos falsos:
- casual (https://www.npmjs.com/package/casual)
```cmd
> npm i casual
```
- faker (https://www.npmjs.com/package/@faker-js/faker)
```cmd
> npm i @faker-js/faker
```
Árbol del directorio con los paquetes instalados (`> npm list`)
```bash
m6_s2_REBOUND_EXERCISE
├── @faker-js/faker@8.0.2
├── casual@1.6.2
└── nodemon@2.0.22
```
Prueba de función definida en `utils.js` utilizando variable importada desde `config.js`, con la siguiente prueba:

```javascript
// ---- config.js ----
let booleano = false;
//...
```

```javascript
// ---- utils.js ----
//...
console.log(concatenate("una"," frase",config.booleano));
```
```cmd
> node utils.js
9
```
Instalación de Nano ID
```cmd
> npm i nanoid
```
Nano ID no es compatible con CommonJS, se crearon las variables de prueba de la siguiente manera:
```javascript
// ---- config.js ----
//...
// Variables para probar Nano ID
let id1, id2;

import('nanoid').then((nanoid) => {
    id1 = nanoid.nanoid();
    id2 = nanoid.nanoid();
});
//...
```
Prueba en index.js (`main.js`) de toda la implementación:
```javascript
// ---- main.js ----
//...
// Datos de prueba de casual y faker
const country = casual.country;
const month = faker.date.month();

// Prueba de casual y faker
console.log(utils.concatenate(country, month, config.booleano));

// Prueba de variable externa booleano
config.booleano = true;
console.log(utils.concatenate(country, month, config.booleano));
```

```cmd
> nodemon main.js
14
ArgentinaApril
```