## Javascript FullStack Web Development
### Módulo 8, Sesión 2 - IMPLEMENTACIÓN DE UNA API REST (I)

# DRILLING: GESTIONANDO LOS ERRORES DE RESPUESTAS DE UNA API REST

## EJERCICIO

Partiendo del REBOUND EXERCISE, que gestiona un conjunto de jugadores de fútbol; adecúe el mismo con 
la finalidad de que emita los siguientes errores, cuando:

1. No se encuentran los datos del jugador según id a consultar. 
2. No se puede ingresar un jugador con el mismo nombre e id. 
 
La gestión de errores de respuestas debe adecuarse a la inspección, según el criterio que se mencionó en el TEXT CLASS REVIEW. 

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

1. No se encuentran los datos del jugador según id a consultar.

    ```javascript
    //GET - POR ID
    app.get('/api/jugadores/:id', (req, res) => {
        try {
            const jugador = listaJugadores.find(e => e["id"] === req.params.id);
            if (!jugador) {
                throw new Error("Jugador no encontrado");
            }
            return res.json({
                data: {
                    jugadores: jugador
                }
            })
        } catch (err) {
            res.status(400).json({
                message: "Ha ocurrido un error",
                err: err.message
            });
        };

    })
    ```
    1.1 Ejemplo

    ***Request***

    `Endpoint`

    ```http
    GET /api/jugadores/19
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

<hr>

2. No se puede ingresar un jugador con el mismo nombre e id.

    ```javascript
    //POST
    app.post('/api/jugadores', (req, res) => {
        const nuevoJugador = {
            id: req.body.id,
            nombre: req.body.nombre,
            posicion: req.body.posicion,
        };
        try {
            const idExiste = listaJugadores.find(e => e["id"] === nuevoJugador.id);
            const nombreExiste = listaJugadores.find(e => e["nombre"] === nuevoJugador.nombre);
            if (idExiste || nombreExiste) {
                throw new Error("id o nombre de jugador ya se encuentra registrado");
            }
            listaJugadores.push(nuevoJugador);
            const nuevaURL = `/api/jugadores/${nuevoJugador.id}`;
            return res.status(201)
                .location(nuevaURL)
                .json({
                    data: {
                        jugadores: listaJugadores,
                    }
                });
        } catch (err) {
            res.status(400).json({
                message: "Se ha producido un error",
                err: err.message
            });
        }
    })
    ```
    2.1 Ejemplo

    ***Request***

    `Endpoint`

    ```HTTP
    GET /api/jugadores
    ```

    `HTTP Body`

    ```json
    {
        "id": "9",
        "nombre": "Elías Figueroa",
        "posicion": "Central"
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
        "message": "Se ha producido un error",
        "err": "id o nombre de jugador ya se encuentra registrado"
    }
    ```