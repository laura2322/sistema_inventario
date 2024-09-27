const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

// Ruta para crear un nuevo pedido
router.post('/', orderController.createOrder);

module.exports = router;
