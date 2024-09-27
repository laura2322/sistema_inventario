// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Prediction = require('../models/Prediction');

// Crear un nuevo producto
router.post('/productos', async (req, res) => {
    try {
        const { nombre, descripcion, precio, cantidad_stock } = req.body;
        const newProduct = await Product.create({
            nombre,
            descripcion,
            precio,
            cantidad_stock
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
});

// Crear una predicción para un producto
router.post('/predicciones', async (req, res) => {
    try {
        const { id_producto, fecha_prediccion, cantidad_predicha } = req.body;
        const product = await Product.findByPk(id_producto);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        const newPrediction = await Prediction.create({
            fecha_prediccion,
            cantidad_predicha,
            id_producto: product.id_producto
        });

        res.status(201).json(newPrediction);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la predicción' });
    }
});

module.exports = router;
