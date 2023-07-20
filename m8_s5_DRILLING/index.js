const express = require('express');
const fs = require('fs');
const port = 3000;
const baseURL = `http://localhost:${port}/`;
const multer = require('multer');
const app = express();

const uploadDirectory = 'uploads';

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
    destination: uploadDirectory,
    filename: (req, file, cb) => {
        // Generar un nombre de archivo único para evitar colisiones
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

app.use(express.json()); // Content-type: application/JSON
app.use(express.urlencoded({ extended: true })); // Content-type: application/x-www-form-urlencoded; extended: true -> recibe más tipos de datos que solo strings y matrices

let libros = [];

app.get('/', (req, res) => {
    res.send(`M8S5 - DRILLING`);
});

app.get('/libros', async (req, res) => {
    res.status(200).json({
        data: libros
    })
});

app.get('/libros/:isbn', (req, res) => {
    const libroExiste = libros.find(e => e["isbn"] === req.params.isbn)
    if (!libroExiste) {
        res.status(404).json({
            error: 'Libro no encontrado'
        });
    } else {
        res.status(200).json({
            data: libroExiste
        })
    }
});

app.get('/uploads/:portada', async (req, res) => {
    const fileName = req.params.portada;
    console.log(fileName);
    const directoryPath = './uploads/';
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "No se puede descargar el archivo. " + err,
            });
        }
    });
});

app.post('/libros', upload.single('portada'), (req, res) => {
    const {
        isbn,
        nombre,
        autor
    } = req.body;

    const isbnExiste = libros.find(e => e["isbn"] === isbn);
    const nombreExiste = libros.find(e => e["nombre"] === nombre);

    if (isbnExiste || nombreExiste) {
        return res.status(409).json({ error: 'El libro ya se encuentra registrado' });
    }

    const portada = req.file;
    //console.log(portada);
    const mimetypes = ['image/png', 'image/jpeg'];
    if (!mimetypes.includes(portada.mimetype)) {
        return res.status(400).json({ error: 'Formato de archivo no aceptado' });
    }

    libros.push({
        "isbn": isbn,
        "nombre": nombre,
        "autor": autor,
        "portada": baseURL + 'uploads/' + portada.originalname
    });
    res.status(201).location(`/libros/${isbn}`).end();
});

app.put('/libros/:isbn', upload.single('portada'), (req, res) => {
    const libroExiste = libros.find(e => e["isbn"] === req.params.isbn)
    if (!libroExiste) {
        res.status(404).json({
            error: 'Libro no encontrado'
        });
    } else {
        const libroUpdate = req.body;
        if (libroUpdate?.nombre) libroExiste.nombre = libroUpdate.nombre;
        if (libroUpdate?.autor) libroExiste.autor = libroUpdate.autor;

        //Recuperación de la ruta del archivo
        const baseURL = 'http://localhost:3000';
        const portadaURL = libroExiste.portada;
        const eliminar = '.' + portadaURL.slice(baseURL.length);
        //Eliminación del archivo
        // Verificar si el archivo existe antes de intentar eliminarlo
        if (fs.existsSync(eliminar)) {
            // Eliminación del archivo
            fs.unlinkSync(eliminar);
            console.log('Archivo eliminado');
        } else {
            console.log('El archivo no existe en la ruta especificada.');
        }

        //Insertar nuevo archivo
        const portada = req.file;
        //console.log(portada);
        const mimetypes = ['image/png', 'image/jpeg'];
        if (!mimetypes.includes(portada.mimetype)) {
            return res.status(400).json({ error: 'Formato de archivo no aceptado' });
        }
        libroUpdate.portada = baseURL + '/uploads/' + portada.originalname

        res.status(204).end();
    }
});

app.delete('/libros/:isbn', async (req, res) => {
    const libroExiste = libros.find(e => e["isbn"] === req.params.isbn)
    if (!libroExiste) {
        res.status(404).json({
            error: 'Libro no encontrado'
        });
    } else {
        try {
            //Recuperación de la ruta del archivo
            const baseURL = 'http://localhost:3000';
            const portadaURL = libroExiste.portada;
            const eliminar = '.' + portadaURL.slice(baseURL.length);
            //Eliminación del archivo
            // Verificar si el archivo existe antes de intentar eliminarlo
            if (fs.existsSync(eliminar)) {
                // Eliminación del archivo
                fs.unlinkSync(eliminar);
                //console.log('Archivo eliminado');
            } else {
                console.log('El archivo no existe en la ruta especificada.');
            }
            //Eliminación del registro
            libros = libros.filter(e => e["isbn"] !== libroExiste.isbn);
            res.status(200).send('Archivo eliminado satisfactoriamente');
        } catch (err) {
            console.error('Error al borrar el archivo');
        }

        res.status(204).end();
    }
})

app.listen(port, (err) => {
    if (err) console.error(`Error de conexión`);
    console.log(`Escuchando en el puerto http://127.0.0.1:${port}`);
});

/*
{
    "isbn": "978-3-030-06072-5",
    "nombre": "Deep Learning: Fundamentals, Theory and Applications",
    "autor": "Kaizhu Huang"
}

{
    "isbn": "978-3-031-27908-9",
    "nombre": "SQL and NoSQL Databases: Modeling, Languages, Security and Architectures for Big Data Management",
    "autor": "Michael Kaufmann"
}

{
    "isbn": "978-1-484-26417-1",
    "nombre": "Practical Machine Learning in JavaScript: TensorFlow.js for Web Developers",
    "autor": "Charlie Gerard"
}
*/