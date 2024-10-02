const Producto = require('../models/Producto');
const productos = require("../assets/productos.json")
const PDF = require("pdfkit");
const ListaCircular = require('../utils/ListaCircular');

// Obtener todos los producto
exports.getAllProductos = async (req, res) => {
    try {
        const providers = await Producto.findAll();
        res.json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener proveedores' });
    }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, cantidad_stock } = req.body;
        const newProduct = await Producto.create({
            nombre,
            descripcion,
            precio,
            cantidad_stock
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
}

// actualizar un nuevo producto
exports.actualizarProducto = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const { nombre, telefono, email, direccion } = req.body;
        //const newProvider = await Proveedor.update({ nombre, telefono, email, direccion });
        res.status(201).json({});
    } catch (error) {
        res.status(500).json({ message: 'Error al crear proveedor' });
    }
};

// obtener PDF productos
exports.PDF_productos = async (req, res) => {
    try {
        const documento = new PDF()
        documento
            .fontSize(20)
            .text("Lista de inventario", {
                align: "center",
            });
        documento.moveDown();
        const listaCircular = new ListaCircular()

        listaCircular.cargarArreglo(productos)

        listaCircular.recorrer(producto => {

            documento.fontSize(14).text(`Nombre: ${producto.nombre}`);
            documento.fontSize(12).text(`Precio: ${producto.precio}`);
            documento.fontSize(12).text(`Descripcion: ${producto.descripcion}`);
            documento.fontSize(12).text(`Cantidad: ${producto.stock}`);
            documento.moveDown();
        })
        // Finalizar el PDF
        documento.end();

        // Configurar la respuesta como un archivo PDF
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename = productos.pdf");

        // Enviar el PDF generado
        documento.pipe(res);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error al crear PDF' });
    }
};

