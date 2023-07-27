const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware');
const bootcampController = require('../controllers/bootcamp.controller');

// POST /api/bootcamp - Crea un bootcamp, acceso por medio de token, previamente iniciado sesión
router.post('/', verifyToken, async (req, res) => {
    try {
        const newBootcamp = await bootcampController.createBootcamp(req.body);
        res.json(newBootcamp);
    } catch (error) {
        console.error('Error al crear el bootcamp:', error);
        res.status(500).json({ message: 'Hubo un error al crear el bootcamp' });
    }
});

// POST /api/bootcamp/adduser - Agrega usuarios previamente registrados al bootcamp, acceso por medio de token, previamente iniciado sesión
router.post('/adduser', verifyToken, async (req, res) => {
    try {
        const { bootcampId, userId } = req.body;
        await bootcampController.addUser(bootcampId, userId);
        res.json({ message: 'Usuario agregado exitosamente al bootcamp' });
    } catch (error) {
        console.error('Error al agregar el usuario al bootcamp:', error);
        res.status(500).json({ message: 'Hubo un error al agregar el usuario al bootcamp' });
    }
});

// GET /api/bootcamp/:id - Obtiene información de un bootcamp según id, y muestra los usuarios registrados en el bootcamp. Acceso por medio de token, previamente iniciado sesión
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const bootcampId = req.params.id;
        const bootcamp = await bootcampController.findById(bootcampId);
        if (!bootcamp) {
            return res.status(404).json({ message: 'Bootcamp no encontrado' });
        }
        res.json(bootcamp);
    } catch (error) {
        console.error('Error al obtener información del bootcamp:', error);
        res.status(500).json({ message: 'Hubo un error al obtener información del bootcamp' });
    }
});

// GET /api/bootcamp - Lista todos los bootcamp, acceso público
router.get('/', async (req, res) => {
    try {
        const bootcamps = await bootcampController.findAll();
        res.json(bootcamps);
    } catch (error) {
        console.error('Error al obtener información de todos los bootcamp:', error);
        res.status(500).json({ message: 'Hubo un error al obtener información de todos los bootcamp' });
    }
});

module.exports = router;
