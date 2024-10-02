const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proveedor = require('./Proveedor');

// Definir el modelo de Pedido
const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    id_proveedor: {
        type: DataTypes.INTEGER,
        references: {
            model: Proveedor, key: "id"
        }
    }
}, {
    timestamps: true,
    tableName: 'Pedido'  // Asegúrate de que el nombre de la tabla sea el mismo que estás usando en las referencias
});

module.exports = Pedido;
