const { body, validationResult } = require('express-validator');

// Middleware para validar los datos del producto
exports.validateProduct = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('price').isFloat({ min: 0 }).withMessage('El precio debe ser un número válido'),
    body('quantity').isInt({ min: 1 }).withMessage('La cantidad debe ser al menos 1'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
