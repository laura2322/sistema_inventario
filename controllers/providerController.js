const Proveedor = require('../models/Proveedor');

// Obtener todos los proveedores
exports.getAllProviders = async (req, res) => {
    try {
        const providers = await Proveedor.findAll();
        res.json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener proveedores' });
    }
};

// Crear un nuevo proveedor
exports.createProvider = async (req, res) => {
    try {
        const { nombre, telefono, email, direccion } = req.body;
        const newProvider = await Proveedor.create({ nombre, telefono, email, direccion });
        res.status(201).json(newProvider);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear proveedor' });
    }
};
