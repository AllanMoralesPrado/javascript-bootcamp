// --- index.js ---

// EDD
let listaJugadores = [
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
];

//Traerse el módulo de express
const express = require('express');
//Definir número de puerto para la escucha
const port = 3000;
//Inicializar express
const app = express();
// Body-parser para analizar el cuerpo de la solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Crear servidor, inicializando la escucha de la aplicación
app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`Escuchando en: http://127.0.0.1:3000`);
})

// --- CREACIÓN DE RUTAS ---

//root
app.get('/', (req, res) => {
    res.send(`GET /api/jugadores/[{id}]`);
})

// --- jugadores ---

//GET - TODOS
app.get('/api/jugadores', (req, res) => {
    return res.json({
        data: {
            jugadores: listaJugadores
        }
    })
})

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
        res.status(404).json({
            message: "Ha ocurrido un error",
            err: err.message
        });
    };

})

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
        res.status(409).json({
            message: "Se ha producido un error",
            err: err.message
        });
    }
})

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