const Inventory = require('../models/Inventory');
const fs = require('fs');

exports.generateInventoryReport = async () => {
    const products = await Inventory.findAll();

    // Generar CSV
    const csvData = products.map(product => `${product.name},${product.price},${product.quantity}`).join('\n');

    fs.writeFileSync('inventory_report.csv', csvData);
    console.log('Reporte de inventario generado');
};
