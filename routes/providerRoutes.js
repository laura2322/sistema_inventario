// routes/providerRoutes.js
const express = require('express');
const router = express.Router();

// Simulación de datos de proveedores
let proveedores = [
    { id: 1, nombre: 'Proveedor 1', telefono: '123456789', email: 'proveedor1@mail.com', direccion: 'Calle 1' },
    { id: 2, nombre: 'Proveedor 2', telefono: '987654321', email: 'proveedor2@mail.com', direccion: 'Calle 2' }
];

// Ruta para obtener todos los proveedores
router.get('/', (req, res) => {
    res.json(proveedores);
});

// Ruta para agregar un proveedor
router.post('/', (req, res) => {
    const { nombre, telefono, email, direccion } = req.body;
    const nuevoProveedor = {
        id: proveedores.length + 1,
        nombre,
        telefono,
        email,
        direccion
    };
    proveedores.push(nuevoProveedor);
    res.status(201).json(nuevoProveedor);
});

module.exports = router;
