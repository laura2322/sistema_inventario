const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para servir las vistas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.get('/add-product.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
});

app.get('/view-products.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'view-products.html'));
});

app.get('/update-product.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'update-product.html'));
});

app.get('/delete-product.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'delete-product.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
