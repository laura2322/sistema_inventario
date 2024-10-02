const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Crear nueva categoría
router.post('/categories', categoriaController.createCategory);

// Obtener todas las categorías
router.get('/categories', categoriaController.getCategories);

module.exports = router;
