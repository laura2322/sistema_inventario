const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria'); // Importa el modelo de Categoria

const Producto = sequelize.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    cantidad_stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Definir la relación entre Producto y Categoria
Producto.belongsTo('Categoria', { foreignKey: 'id', targetKey: 'id_categoria'})
Categoria.hasMany(Producto, { foreignKey: 'id_categoria' });

module.exports = Producto;
