const Movement = require('../models/Movement');

// Registrar un nuevo movimiento de inventario (entrada/salida)
exports.recordMovement = async (req, res) => {
    try {
        const { productId, type, quantity } = req.body;
        const newMovement = await Movement.create({ productId, type, quantity });
        res.status(201).json(newMovement);
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar movimiento' });
    }
};

// Obtener el historial de movimientos de inventario
exports.getMovements = async (req, res) => {
    try {
        const movements = await Movement.findAll();
        res.json(movements);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener movimientos' });
    }
};
