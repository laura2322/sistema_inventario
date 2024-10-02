
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');
const Producto = require('./Producto');

// Definir el modelo de DetallePedido
const DetallePedido = sequelize.define('DetallePedido', {
    id_detalle_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_pedido: {
        type: DataTypes.INTEGER,
        references: {
            model: Pedido,
            key: 'id'
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id'
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
