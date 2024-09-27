// models/Cliente.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cliente extends Model { }

Cliente.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Asegura que el email sea único
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Cliente'
});

module.exports = Cliente;
