const express = require('express');
const router = express.Router();
const movementController = require('../controllers/movementController');

// Rutas para gestionar los movimientos de inventario
router.post('/movements', movementController.recordMovement);
router.get('/movements', movementController.getMovements);

module.exports = router;
