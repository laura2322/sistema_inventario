const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo de Pedido
const Pedido = sequelize.define('pedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'pedido'  // Asegúrate de que el nombre de la tabla sea el mismo que estás usando en las referencias
});

// Definir el modelo de Producto (si no lo has definido ya)
const Producto = sequelize.define('producto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: true,
    tableName: 'productos'
});

// Sincronizar las tablas en el orden correcto
(async () => {
    try {
        await Pedido.sync();  // Sincronizamos primero la tabla pedidos
        await Producto.sync();  // Luego productos
        await DetallePedido.sync();  // Finalmente detalle_pedidos
        console.log('Tablas sincronizadas correctamente');
    } catch (error) {
        console.error('Error al sincronizar las tablas:', error);
    }
})();

module.exports = { Pedido, Producto, DetallePedido };
