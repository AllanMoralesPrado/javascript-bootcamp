## Javascript FullStack Web Development
### Módulo 8, Sesión 3 - IMPLEMENTACIÓN DE UNA API REST (II)

# DRILLING: MEJORANDO NUESTRA APP DE FÚTBOL

## EJERCICIO

Partiendo del REBOUND EXERCISE del CUE que gestiona un conjunto de jugadores de fútbol, adecúe el mismo con la finalidad de que emita los siguientes errores, cuando: 

1. Al actualizar no se encuentra el id del jugador. 
2. Al actualizar se deben pasar los campos de nombre y posición no vacíos, ambos o alguno, de lo contrario emite un error. 
3. Al eliminar un jugador emite un error si el id del jugador no es encontrado. 

La gestión de errores de respuestas debe adecuarse a la inspección, según el criterio que se mencionó en 
el TEXT CLASS REVIEW. 

Como referencia, una forma para la implementación y adecuación sería:

```javascript
router.get("/lista/:id", async (req, res) => { 
    let { 
        id 
    } = req.params; 
    id = numero(id); 
    try { 
        let persona = personas.find(persona => persona._id === id); 
        res.status(200).json({ 
            data: persona 
        }); 
    } catch (err) { 
        res.status(400).json({ 
            message: "Se presento un error, persona no encontrada", 
            err 
        }); 
    } 
})
```

## SOLUCIÓN

1. Método PUT para actualizar datos de jugadores

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
    1.1 Ejemplo

    1.1.1 Al actualizar no se encuentra el id del jugador.

    ***Request***

    `Endpoint`

    ```http
    PUT /api/jugadores/19
    ```
    ***Response***

    `HTTP header`

    ```http
    400 Bad Request
    ```
    `HTTP body`

    ```json
    {
        "message": "Ha ocurrido un error",
        "err": "Jugador no encontrado"
    }
    ```

    1.1.2 Al actualizar se deben pasar los campos de nombre y posición no vacíos, ambos o alguno, de lo contrario emite un error.

    ***Request***

    `Endpoint`

    ```http
    PUT /api/jugadores/1
    ```

    `HTTP body`

    ```json
    {
        
    }
    ```

    ***Response***

    `HTTP header`

    ```http
    400 Bad Request
    ```
    `HTTP body`

    ```json
    {
        "message": "Ha ocurrido un error",
        "err": "No hay datos para actualizar"
    }
    ```

<hr>

2. Al eliminar un jugador emite un error si el id del jugador no es encontrado.

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
    2.1 Ejemplo

    ***Request***

    `Endpoint`

    ```http
    DELETE /api/jugadores/19
    ```
    ***Response***

    `HTTP header`

    ```http
    400 Bad Request
    ```
    `HTTP body`

    ```json
    {
        "message": "Ha ocurrido un error",
        "err": "Jugador no encontrado"
    }
    ```