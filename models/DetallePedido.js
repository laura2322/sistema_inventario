const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta la ruta según la estructura de tu proyecto

const DetallePedido = sequelize.define('DetallePedido', {
    id_detalle_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Pedidos', // Asegúrate de que el nombre del modelo sea correcto
            key: 'id_pedido'
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Productos', // Asegúrate de que el nombre del modelo sea correcto
            key: 'id_producto'
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

module.exports = DetallePedido;
