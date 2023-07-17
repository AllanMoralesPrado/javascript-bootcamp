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
    return res.json({
        data: {
            jugadores: listaJugadores.find(e => e["id"] === req.params.id)
        }
    })
})

//POST
app.post('/api/jugadores', (req, res) => {
    const nuevoJugador = {
        id: req.body.id,
        nombre: req.body.nombre,
        posicion: req.body.posicion,
    };

    listaJugadores.push(nuevoJugador);

    const nuevaURL = `/api/jugadores/${nuevoJugador.id}`;

    return res.status(201)
    .location(nuevaURL)
    .json({
        data: {
            jugadores: listaJugadores,
        }
    });
})