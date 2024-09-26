const Inventory = require('../models/Inventory');

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Inventory.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        const newProduct = await Inventory.create({ name, price, quantity });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear producto' });
    }
};

// Actualizar producto existente
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, quantity } = req.body;
        const product = await Inventory.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        product.name = name;
        product.price = price;
        product.quantity = quantity;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar producto' });
    }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Inventory.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        await product.destroy();
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
};
