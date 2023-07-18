## Javascript FullStack Web Development
### Módulo 8, Sesión 3 - IMPLEMENTACIÓN DE UNA API REST (II)

# REBOUND EXERCISE: GESTIONANDO UN EQUIPO DE FÚTBOL

## EJERCICIO

Avanzando en el desarrollo del ejercicio del CUE del backend con Node.JS y Express, que permita gestionar un conjunto de jugadores de fútbol, los cuales contienen los siguientes atributos: id, nombre, posición;   continúe con la actualización y eliminación de un jugador en la API.  
 
Los endpoint tienen la siguiente estructura:

| Ruta              | Verbo HTTP | Descripción                    |
|-------------------|------------|--------------------------------|
| /api/jugadores    | GET        | Listado de todos los jugadores |
| /api/jugadores/id | GET        | Datos del jugador según id     |
| /api/jugadores    | POST       | Ingreso de un jugador          |

El listado de prueba de los jugadores es el siguiente:

```json
listaJugadores: [{ 
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
```

## SOLUCIÓN

1. Método PUT para actualizar datos de jugadores según id

    ```javascript
    // PUT
    app.put('/api/jugadores/:id', (req, res) => {
        try {
            const jugador = listaJugadores.find(e => e["id"] === req.params.id);
            if (!jugador) {
                throw new Error("Jugador no encontrado");
            };
            const actualizacionJugador = {
                nombre: req.body?.nombre,
                posicion: req.body?.posicion,
            };
            if(!actualizacionJugador.nombre && !actualizacionJugador.posicion){
                throw new Error("No hay datos para actualizar")
            }
            if(actualizacionJugador.nombre) jugador.nombre = actualizacionJugador.nombre;
            if(actualizacionJugador.posicion) jugador.posicion = actualizacionJugador.posicion;
            res.status(200).end();
        } catch (err) {
            res.status(400).json({
                message: "Ha ocurrido un error",
                err: err.message
            });
        };
    });

    ```
    Ejemplo

    ***Request***

    `Endpoint`

    ```http
    PUT /api/jugadores/1
    ```
    `HTTP body`

    ```json
    {
        "nombre": "Alexis Sánchez", 
        "posicion": "Delantero"
    }
    ```

    ***Response***

    `HTTP header`

    ```http
    200 Ok
    ```

<hr>

2. Eliminación del jugador según id

    ```javascript
    // DELETE
    app.delete('/api/jugadores/:id', (req, res) => {
        try {
            const jugador = listaJugadores.find(e => e["id"] === req.params.id);
            if (!jugador) {
                throw new Error("Jugador no encontrado");
            };
            listaJugadores = listaJugadores.filter(e => e["id"] !== jugador.id);
            res.status(204).end();
        } catch (err) {
            res.status(404).json({
                message: "Ha ocurrido un error",
                err: err.message
            });
        };
    })
    ```
    Ejemplo

    ***Request***

    `Endpoint`

    ```http
    DELETE /api/jugadores/1
    ```
    ***Response***

    `HTTP header`

    ```http
    204 No Content
    ```