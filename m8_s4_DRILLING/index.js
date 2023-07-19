const express = require('express');
const fileUpload = require('express-fileupload');
const port = 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    createParentPath: true,
    defCharset: 'utf8',
    defParamCharset: 'utf8',
    limits: { fileSize: 1 * 1024 * 1024 }, // Limite de tamaño de archivo: 1MB
}));

app.get('/', (req, res) => {
    res.send(`Aprendiendo a subir archivos con Node.js y Express`);
});

app.post('/cargadearchivo', async (req, res) => {
    // Verificar carga de archivo
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            res.send({
                status: false,
                message: 'Archivo no subido al servidor',
                error: "400"
            })
        } else {
            // Verificar extensión del archivo
            let files = [
                req.files.fileName1,
                req.files.fileName2,
                req.files.fileName3,
            ];

            for(let fileRecieved of files) {
                let extName = fileRecieved.name;
                let allowedExtension = ['.png', 'jpeg'];
                uploadPath = './files/' + extName;

                if (!allowedExtension.includes(extName)) {
                    fileRecieved.mv(`./files/${fileRecieved.name}`, err => {
                        if (err) {
                            return res.status(500).send({
                                message: err
                            });
                        }
                        return res.status(200).send({
                            message: `Archivo subido al servidor, en ${fileRecieved.name}`
                        });
                    });
                } else {
                    return res.status(400).send({
                        message: 'Archivo no válido, solo .png o .jpeg'
                    });
                };
            }
            
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, (err) => {
    if (err) { console.error(err); }
    console.log(`Escuchando en http://localhost:${port}`)
});