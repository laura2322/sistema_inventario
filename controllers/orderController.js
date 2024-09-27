const Pedido = require('../models/Pedido');
const DetallePedido = require('../models/DetallePedido');

// Crear un nuevo pedido
exports.createOrder = async (req, res) => {
    try {
        const { id_proveedor, monto_total, detalles } = req.body;
        const order = await Pedido.create({ id_proveedor, monto_total });

        for (let detalle of detalles) {
            await DetallePedido.create({
                id_pedido: order.id,
                id_producto: detalle.id_producto,
                cantidad: detalle.cantidad,
                precio_unitario: detalle.precio_unitario
            });
        }

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear pedido' });
    }
};
