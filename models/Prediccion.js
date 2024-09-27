const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const Prediction = sequelize.define('Prediccion', {
    fecha_prediccion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cantidad_predicha: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'predicciones'
});

// Relación de uno a muchos
Product.hasMany(Prediction, { foreignKey: 'id_producto' });
Prediction.belongsTo(Product, { foreignKey: 'id', targetKey: 'id_producto'});
module.exports = Prediction;
