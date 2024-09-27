const Venta = require('../models/Venta');
const DetalleVenta = require('../models/DetalleVenta');

// Crear una nueva venta
exports.createSale = async (req, res) => {
    try {
        const { id_cliente, monto_total, detalles } = req.body; // detalles es un array de productos
        const sale = await Venta.create({ id_cliente, monto_total });

        for (let detalle of detalles) {
            await DetalleVenta.create({
                id_venta: sale.id,
                id_producto: detalle.id_producto,
                cantidad: detalle.cantidad,
                precio_unitario: detalle.precio_unitario
            });
        }

        res.status(201).json(sale);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear venta' });
    }
};
