const Categoria = require('../models/Categoria');

// Obtener todas las categorías
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categoria.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorías' });
    }
};

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategoria = await Categoria.create({ name });
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoría' });
    }
};
