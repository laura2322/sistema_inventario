// Middleware para validar datos de entrada
exports.validateProductData = (req, res, next) => {
    const { name, price, quantity } = req.body;
    if (!name || price <= 0 || quantity < 0) {
        return res.status(400).json({ message: 'Datos inválidos' });
    }
    next();
};
