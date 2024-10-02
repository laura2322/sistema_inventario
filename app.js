const express = require('express');
const sequelize = require('./config/database');
const Prediccion = require('./models/Prediccion');


const app = express();
app.use(express.json());
app.use(express.static('public'));

// Rutas
app.use('/api/proveedor', require('./routes/proveedorRoutes'));
app.use('/api/sales', require('./routes/saleRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/productos', require('./routes/productRoutes'));


// Sincronización con la base de datos
sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(4000, () => {
        console.log('Servidor ejecutándose en http://localhost:4000');
    });
});
