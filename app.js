const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Rutas
app.use('/api/providers', require('./routes/providerRoutes'));
app.use('/api/sales', require('./routes/saleRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Sincronización con la base de datos
sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3000, () => {
        console.log('Servidor ejecutándose en http://localhost:3000');
    });
});
