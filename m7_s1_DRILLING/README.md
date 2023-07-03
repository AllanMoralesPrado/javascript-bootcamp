## Javascript FullStack Web Development
### Módulo 7, Sesión 1 - CONEXIÓN A UNA BASE DE DATOS

# DRILLING: CONECTARSE A UNA BASE DE DATOS CON NODE-POSTGRESQL

### EJERCICIO

Partiendo del ejercicio REBOUND EXERCISE - CUE 1, realice la conexión de la base de datos con node.js, ejecutando los siguientes pasos: 
1. Crear el directorio, e inicializar el proyecto con npm. 
2. Instalación del paquete pg. 
3. Crear una base de datos en PostgreSQL y el usuario de ésta. 
4. Conectarse como cliente y como pool. 
5. Conexión con un URI string.

### SOLUCIÓN

1. Creación de directorio donde se inicializará un proyecto con npm y se instalará el paquete `pg`
    ```bash session
    mkdir m7_s1_DRILLING && cd m7_s1_DRILLING && npm init -y && npm i pg
    ```
2. Creación de base de datos en PostgreSQL y de un usuario propietario de ésta (revisar `practica_db_ddl.sql` en **m7_s2_REBOUND_EXERCISE**)
    
![Paso 2](https://github.com/AllanMoralesPrado/javascript-bootcamp/blob/master/m7_s1_DRILLING/creaci%C3%B3n_db.png)
![Paso 2](https://github.com/AllanMoralesPrado/javascript-bootcamp/blob/master/m7_s1_DRILLING/creaci%C3%B3n_tablas.png)

3. Instalar `dotenv` para proteger las configuraciones de la base de datos

    ```properties
    npm i dotenv
    ```
4. Crear un archivo `.env` e ingresar las configuraciones sensibles:

    ```env
    DB_HOST=xxxxxxxx
    DB_PORT=xxxx
    DB_DATABASE=practica_db
    DB_USER=m7s1drllng
    DB_PASSWORD=xxxxxx
    ```

5. Añadir al código del archivo de conexión a la base de datos la importación del módulo `dotenv`

    ```JAVASCRIPT
    // Modulo para cargar las variables de entorno de .env
    require('dotenv').config();
    ```

6. Modificar el valor de la constante `connectionString` en el mismo código para acceder a las variables de entorno definidas en el archivo `.env`

    ```JAVASCRIPT
    // URI de conexión en string 
    const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    ```

7. Ejecutar el script

    ```properties
    node connectionDB.js
    ```
    RESULTADO de la conexión:
    ```powershell
    D:\Documentos\JavaScript bootcamp\m7_node_data\m7_s1_conexion\m7_s1_DRILLING>node connectionDB.js
    undefined Result {
    command: 'SELECT',
    rowCount: 1,
    oid: null,
    rows: [ { now: 2023-07-03T05:52:23.353Z } ],
    fields: [
        Field {
        name: 'now',
        tableID: 0,
        columnID: 0,
        dataTypeID: 1184,
        dataTypeSize: 8,
        dataTypeModifier: -1,
        format: 'text'
        }
    ],
    _parsers: [ [Function: parseDate] ],
    _types: TypeOverrides {
        _types: {
        getTypeParser: [Function: getTypeParser],
        setTypeParser: [Function: setTypeParser],
        arrayParser: [Object],
        builtins: [Object]
        },
        text: {},
        binary: {}
    },
    RowCtor: null,
    rowAsArray: false
    }
    null Result {
    command: 'SELECT',
    rowCount: 1,
    oid: null,
    rows: [ { now: 2023-07-03T05:52:23.354Z } ],
    fields: [
        Field {
        name: 'now',
        tableID: 0,
        columnID: 0,
        dataTypeID: 1184,
        dataTypeSize: 8,
        dataTypeModifier: -1,
        format: 'text'
        }
    ],
    _parsers: [ [Function: parseDate] ],
    _types: TypeOverrides {
        _types: {
        getTypeParser: [Function: getTypeParser],
        setTypeParser: [Function: setTypeParser],
        arrayParser: [Object],
        builtins: [Object]
        },
        text: {},
        binary: {}
    },
    RowCtor: null,
    rowAsArray: false
    }
    ```