const express = require('express');
const fileUpload = require('express-fileupload');
const port = 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true,
    defCharset: 'utf8',
    defParamCharset: 'utf8'
}));

app.get('/', (req, res) => {
    res.send(`Aprendiendo a subir archivos con Node.js y Express`);
});

app.post('/cargadearchivo', async (req, res) => {
    // Verificar carga de archivo
    try{        
        if (!req.files || Object.keys(req.files).length === 0) {
            res.send({
                status: false,
                message: 'Archivo no subido al servidor',
                error: "400"
            })
        } else {
            let fileRecieved = req.files.fileName;
            // Verificar extensión del archivo
            if(fileRecieved.mimetype === 'text/plain'){
                fileRecieved.mv(`./files/${fileRecieved.name}`, err => {
                    if (err) {
                        return res.status(500).send({
                            message: err
                        });
                    }
                    return res.status(200).send({
                        message: `Archivo subido al servidor, en ${fileRecieved.name}`
                    });
                })
            } else {
                return res.status(400).send({ 
                    message: 'Archivo no válido, solo .txt' 
                });
            };            
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, (err) => {
    if (err) { console.error(err); }
    console.log(`Escuchando en http://localhost:${port}`)
});