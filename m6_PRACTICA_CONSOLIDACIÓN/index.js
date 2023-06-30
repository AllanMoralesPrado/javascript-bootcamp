const http = require('http');
const url = require('url');
const fs = require('fs');

// Cargar el contenido del archivo anime.json
let animeData;
const urlFile = 'anime.json';

try {
    // Intentar leer el contenido del archivo anime.json
    const animeDataFile = fs.readFileSync(urlFile, 'utf-8');
    animeData = JSON.parse(animeDataFile);
} catch (error) {
    console.error('Error al leer el archivo anime.json:', error);
    process.exit(1); // Otra opción sería continuar sin los datos y mostrar un mensaje de advertencia
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    try {
        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query;

        // CRUD - CREATE: metodo POST
        if (req.method === 'POST' && parsedUrl.pathname === '/series') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                // Aquí `body` contiene el cuerpo completo de la solicitud POST
                const reqData = JSON.parse(body);
                const { nombre, genero, año, autor } = reqData;

                // Resto del código para procesar los datos y responder a la solicitud
                const keys = Object.keys(animeData);
                const lastKey = keys[keys.length - 1];
                const id = String(parseInt(lastKey) + 1);

                // Crear el nuevo registro
                const nuevoAnime = { nombre: nombre, genero: genero, año: año, autor: autor };
                animeData[id] = nuevoAnime;
                fs.writeFileSync('anime.json', JSON.stringify(animeData, null, 2));

                res.writeHead(201, { 'Content-Type': 'text/plain' });
                res.end('Anime registrado exitosamente');
            });
        }

        // CRUD - READ: metodo GET
        else if (req.method === 'GET' && parsedUrl.pathname === '/series') {
            // Consulta de todas las series
            if (Object.keys(query).length === 0) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(animeData, null, 2));
            }
            // Consulta de serie por ID
            else if (query.id) {
                const serieId = query.id;
                const serie = animeData[serieId];
                if (serie) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(serie, null, 2));
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Serie no encontrada');
                }
            }
            // Consulta de serie por nombre
            else if (query.nombre) {
                const serieNombre = query.nombre;
                const serie = Object.values(animeData).find((item) => item.nombre.toLowerCase() === serieNombre.toLowerCase());
                if (serie) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(serie, null, 2));
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Serie no encontrada');
                }
            }
            // Sin parámetros de consulta
            else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Falta el parámetro de consulta (id o nombre)');
            }

        }

        // CRUD UPDATE - metodo PUT
        else if (req.method === 'PUT' && parsedUrl.pathname === '/series') {
            // Consulta de todas las series
            if (query.id) {
                const serieId = query.id;
                const serie = animeData[serieId];
                if (serie) {
                    let body = '';

                    req.on('data', (chunk) => {
                        body += chunk;
                    });

                    req.on('end', () => {
                        // Aquí `body` contiene el cuerpo completo de la solicitud POST
                        const reqData = JSON.parse(body);
                        const { nombre, genero, año, autor } = reqData;

                        // Resto del código para procesar los datos y responder a la solicitud
                        serie.nombre = nombre ?? serie.nombre;
                        serie.genero = genero ?? serie.genero;
                        serie.año = año ?? serie.año;
                        serie.autor = autor ?? serie.autor;

                        // Registrar la actualización
                        fs.writeFileSync('anime.json', JSON.stringify(animeData, null, 2));

                        res.writeHead(201, { 'Content-Type': 'text/plain' });
                        res.end('Anime actualizado exitosamente');
                    });
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Serie no encontrada');
                }
            }
            // Sin parámetros de consulta
            else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Falta el parámetro de consulta (id)');
            }
        }

        // CRUD - DELETE: Metodo DELETE
        else if (req.method === 'DELETE' && parsedUrl.pathname === '/series') {
            if (query.id) {
                const serieId = query.id;
                const serie = animeData[serieId];
                if (serie) {
                    delete animeData[serieId];
                    // Registrar la actualización
                    fs.writeFileSync('anime.json', JSON.stringify(animeData, null, 2));

                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('Anime eliminado exitosamente');
                } else {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('Serie no encontrada');
                }
            }
            // Sin parámetros de consulta
            else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Falta el parámetro de consulta (id o nombre)');
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Ruta no encontrada');
        }
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error en el servidor');
    }
});

server.listen(8080, () => {
    console.log('Servidor iniciado en http://localhost:8080');
});

module.exports = { server };
