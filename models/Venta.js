// models/Venta.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente'); // Importar el modelo Cliente

class Venta extends Model { }

Venta.init({
    fecha_venta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente, // Referencia a la tabla Cliente
            key: 'id'
        },
        allowNull: false // Asegura que id_cliente no sea nulo
    },
    monto_total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Venta'
});

// Establecer la relación
Cliente.hasMany(Venta, { foreignKey: 'id_cliente' }); // Un cliente puede tener muchas ventas
Venta.belongsTo(Cliente, { foreignKey: 'id_cliente' }); // Cada venta pertenece a un cliente

module.exports = Venta;
