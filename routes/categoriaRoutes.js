const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Crear nueva categoría
router.post('/categories', categoryController.createCategory);

// Obtener todas las categorías
router.get('/categories', categoryController.getCategories);

module.exports = router;
