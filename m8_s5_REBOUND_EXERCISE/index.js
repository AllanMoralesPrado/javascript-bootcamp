const express = require('express');
const fs = require('fs');
const port = 5001;
const app = express();
const baseURL = `http://localhost:${port}/`;

app.get('/', (req, res) => {
    res.status(400).send('M8S5 - Rebound Exercise');
});

app.get('/listadodearchivos', async (req, res) => {
    const directoryPath = './archivo/';
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.status(400).send('No encontrado');
        }

        let listaArchivos = [];

        files.forEach(file => {
            listaArchivos.push({
                name: file,
                url: baseURL + file
            });
        });
        res.status(200).send(listaArchivos);
    }); 
});

app.get('/archivo/:name', async (req, res) => {
    const fileName = req.params.name;
    const directoryPath = './archivo/';
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "No se puede descargar el archivo. " + err,
            });
        }
    });
});

app.delete('/archivo/:name', async (req, res) => {
    const fileName = req.params.name;
    const directoryPath = './archivo/';
    try{
        fs.unlinkSync(directoryPath + fileName);
        console.log('Archivo removido');
        res.status(200).send('Archivo eliminado satisfactoriamente');
    } catch (err) {
        console.error('Error al borrar el archivo');
    }
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(baseURL);
});