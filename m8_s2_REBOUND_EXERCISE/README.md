## Javascript FullStack Web Development
### Módulo 8, Sesión 2 - IMPLEMENTACIÓN DE UNA API REST (I)

# REBOUND EXERCISE: CREANDO UNA API REST CON NODE.JS Y EXPRESS

## EJERCICIO
Desarrolla  una  API  REST  en  backend  con  Node.JS  y  Express,  que  permita  gestionar  un  conjunto  de 
jugadores de fútbol, los cuales contienen los siguientes atributos: id, nombre, posición. 

Los endpoint tienen la siguiente estructura:

| Ruta              | Verbo HTTP | Descripción                    |
|-------------------|------------|--------------------------------|
| /api/jugadores    | GET        | Listado de todos los jugadores |
| /api/jugadores/id | GET        | Datos del jugador según id     |
| /api/jugadores    | POST       | Ingreso de un jugador          |

El listado de prueba de los jugadores, es el siguiente: 

```json
{ 
   "listaJugadores":[ 
      { 
         "id":"1", 
         "nombre":"Elías Figueroa", 
         "posicion":"Central" 
      }, 
      { 
         "id":"2", 
         "nombre":"Ben Brereton Díaz", 
         "posicion":"Delantero" 
      }, 
      { 
         "id":"3", 
         "nombre":"Arturo Vidal", 
         "posicion":"Mediocampista" 
      } 
   ] 
}
```

## Solución

### Preliminares

Inicialización del proyecto e instalación de dependencias en un directorio (nota: body-parser está incorporado en las versiones recientes de *express*)

`bash`

```bash
mkdir proyecto && cd proyecto && npm init -y && npm i express
```
<hr>

Creación del archivo `index.js` para levantar el servidor, y crear los endpoints requeridos:

`bash`

```bash
touch index.js
```

`cmd`
```cmd
type nul > index.js
```
<hr>

### Diseño de la API

#### **Estructura de URL**

1. URL que representa la colección de recursos: jugadores

    ```http
    /api/jugadores
    ```
2. URL que representa un recurso de la colección de jugadores

    ```http
    /api/jugadores/{id}
    ```
<hr>

#### **Métodos HTTP**

```
GET /api/jugadores
GET /api/jugadores/{id}
POST /api/jugadores
```
<hr>

#### **Ejemplos de peticiones HTTP**

**1. BÚSQUEDA de todos los jugadores**

***CLIENTE***

`HTTP Header`
```
GET /api/jugadores
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```
200 OK
```

`HTTP Body`
```JSON
{
    "data": {
        "jugadores": [
            {
                "id": "1",
                "nombre": "Elías Figueroa",
                "posicion": "Central"
            },
            {
                "id": "2",
                "nombre": "Ben Brereton Díaz",
                "posicion": "Delantero"
            },
            {
                "id": "3",
                "nombre": "Arturo Vidal",
                "posicion": "Mediocampista"
            }
        ]
    }
}
```
<hr>

**2. BÚSQUEDA de jugador por id**

***CLIENTE***

`HTTP Header`
```
GET /api/jugadores/{id}
```

Por ejemplo:

```
GET /api/jugadores/2
```

***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```
200 OK
```

`HTTP Body` (a partir del endpoint de ejemplo)
```JSON
{
    "data": {
        "jugadores": {
            "id": "2",
            "nombre": "Ben Brereton Díaz",
            "posicion": "Delantero"
        }
    }
}
```
<hr>

**3. CREACIÓN de jugador**

***CLIENTE***

`HTTP Header`
```
POST /api/jugadores
```
`HTTP Body` (ejemplo)

```json
{
    "id":"4",
    "nombre":"Gabriel Arias",
    "posicion":"Portero"
}
```
***SERVIDOR (RESPUESTA EXITOSA)***

`HTTP Header`
```http
201 Created
Location: /api/jugadores/4
```

`HTTP Body`

```json
{
    "data": {
        "jugadores": [
            {
                "id": "1",
                "nombre": "Elías Figueroa",
                "posicion": "Central"
            },
            {
                "id": "2",
                "nombre": "Ben Brereton Díaz",
                "posicion": "Delantero"
            },
            {
                "id": "3",
                "nombre": "Arturo Vidal",
                "posicion": "Mediocampista"
            },
            {
                "id": "4",
                "nombre": "Gabriel Arias",
                "posicion": "Portero"
            }
        ]
    }
}
```

### Observaciones

El código proporcionado (`index.js`) tiene algunas mejoras, pero aún faltan algunos aspectos importantes para que la API sea de calidad:

- **Validación de entrada**: No hay validación de datos en las solicitudes POST. La API debe incluir validaciones para asegurar que los campos id, nombre y posicion estén presentes y tengan el formato correcto antes de agregar un nuevo jugador a la lista.

- **Gestión de errores**: No hay manejo adecuado de errores en el código actual ante solicitudes incorrectas, conflictos o problemas internos del servidor.

- **Pruebas unitarias**: No hay pruebas unitarias en el código actual para verificar el comportamiento esperado de cada ruta y asegurar de que la API funcione correctamente.

- **Validación de entrada adicional**: Además de la validación básica de presencia y formato, se podría considerar agregar validaciones adicionales, como la longitud máxima de los campos, valores permitidos, etc.