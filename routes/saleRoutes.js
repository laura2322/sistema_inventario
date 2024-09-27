const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.Router();

// Ruta para crear una nueva venta
router.post('/', saleController.createSale);

module.exports = router;
