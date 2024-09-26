const { Sequelize } = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('gestion-inventario', 'postgres', '123', {
host: 'localhost',
dialect: 'postgres'
});

module.exports = sequelize;
