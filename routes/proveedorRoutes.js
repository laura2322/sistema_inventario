// routes/providerRoutes.js
const express = require('express');
const router = express.Router();
const ProveedorController = require("../controllers/proveedorController")

// Ruta para obtener todos los proveedores
router.get('/',ProveedorController.getAllProviders);

// Ruta para agregar un proveedor
router.post('/',ProveedorController.createProvider);

// ruta para actualizar un proveedor
router.patch('/:id',ProveedorController.actualizarProvider);

module.exports = router;
