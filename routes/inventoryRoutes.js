const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Rutas para gestionar productos de inventario
router.get('/inventory', inventoryController.getAllProducts);
router.post('/inventory', inventoryController.createProduct);
router.put('/inventory/:id', inventoryController.updateProduct);
router.delete('/inventory/:id', inventoryController.deleteProduct);

module.exports = router;
