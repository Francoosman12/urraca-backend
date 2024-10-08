const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registrar un nuevo usuario
router.post('/register', authController.register);

// Ruta para autenticar un usuario
router.post('/login', authController.login);

module.exports = router;
