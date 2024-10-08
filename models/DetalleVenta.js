const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Venta = require('./Venta');
const Producto = require('./Producto');

class DetalleVenta extends Model { }

DetalleVenta.init({
    id_venta: {
        type: DataTypes.INTEGER,
        references: {
            model: Venta, // Modelo Venta
            key: 'id'
        }
    },
    id_producto: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto, // Suponiendo que el modelo productos esté definido
            key: 'id'
        }
    },
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.DECIMAL
}, { sequelize, modelName: 'DetalleVenta' });

module.exports = DetalleVenta;
