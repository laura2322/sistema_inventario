const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Producto = require('./Producto');  // Asegúrate de que el modelo Producto esté correctamente importado

const Prediccion = sequelize.define('Prediccion', {
    fecha_prediccion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cantidad_predicha: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_producto: {  // Aquí agregamos la clave foránea correctamente
        type: DataTypes.INTEGER,
        references: {
            model: Producto,  // Modelo Producto
            key: 'id',       // Clave primaria en el modelo Producto
        },
        allowNull: false
    }
}, {
    tableName: 'Prediccion'
});

module.exports = Prediccion;
