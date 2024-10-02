// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const Prediccion = require('../models/Prediccion');
const ProductoController = require("../controllers/productoController")

// Crear un nuevo producto
router.post('/productos',ProductoController.createProducto );

// ruta para obtener PDF
router.get("/PDF",ProductoController.PDF_productos)

// Crear una predicción para un producto
router.post('/predicciones', async (req, res) => {
    try {
        const { id_producto, fecha_prediccion, cantidad_predicha } = req.body;
        const product = await Producto.findByPk(id_producto);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        const newPrediction = await Prediccion.create({
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
