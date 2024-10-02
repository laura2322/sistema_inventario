// Importación de los modelos Pedido y DetallePedido
const Pedido = require('../models/Pedido');
const DetallePedido = require('../models/DetallePedido'); // Ajusta la ruta si es necesario

// Crear un nuevo pedido
exports.createOrder = async (req, res) => {
    try {
        const { id_proveedor, monto_total, detalles } = req.body; // Desestructuración del cuerpo de la petición
        const order = await Pedido.create({ id_proveedor, monto_total }); // Crear el pedido

        // Iterar sobre los detalles del pedido y crear las entradas correspondientes en DetallePedido
        for (let detalle of detalles) {
            await DetallePedido.create({
                id_pedido: order.id, // ID del pedido recién creado
                id_producto: detalle.id_producto, // ID del producto
                cantidad: detalle.cantidad, // Cantidad de producto
                precio_unitario: detalle.precio_unitario // Precio unitario del producto
            });
        }

        // Devolver la respuesta exitosa con el pedido creado
        res.status(201).json(order);
    } catch (error) {
        // Manejo de errores y respuesta en caso de fallo
        res.status(500).json({ message: 'Error al crear pedido' });
    }
};
