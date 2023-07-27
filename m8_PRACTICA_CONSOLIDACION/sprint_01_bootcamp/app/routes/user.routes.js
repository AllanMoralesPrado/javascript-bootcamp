const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware');
const userController = require('../controllers/user.controller');

// GET /api/user/:id - Lista información del usuario según id, acceso por medio de token, previamente iniciado sesión
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userController.findUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error al obtener información del usuario:', error);
        res.status(500).json({ message: 'Hubo un error al obtener información del usuario' });
    }
});

// GET /api/user/ - Lista información de todos los usuarios y los Bootcamp registrados, acceso por medio de token, previamente iniciado sesión
router.get('/', verifyToken, async (req, res) => {
    try {
        const users = await userController.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error al obtener información de todos los usuarios:', error);
        res.status(500).json({ message: 'Hubo un error al obtener información de todos los usuarios' });
    }
});

// PUT /api/user/:id - Actualiza los campos de firstName y lastName de un usuario según su id, acceso por medio de token, previamente iniciado sesión
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        const { firstName, lastName } = req.body;
        const user = await userController.updateUserById(userId, firstName, lastName);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ message: 'Hubo un error al actualizar el usuario' });
    }
});

// DELETE /api/user/:id - Elimina el usuario según id, acceso por medio de token, previamente iniciado sesión
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userController.deleteUserById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ message: 'Hubo un error al eliminar el usuario' });
    }
});

module.exports = router;
