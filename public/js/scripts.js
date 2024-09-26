document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    // Validar campos (aquí puedes agregar más validaciones si lo necesitas)
    if (!productName || !price || !quantity) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Aquí puedes hacer una solicitud POST al servidor
    // por ejemplo, usando fetch o axios
    fetch('/api/inventory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: productName,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            description: document.getElementById('description').value,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Producto agregado con éxito');
        // Limpiar el formulario
        document.getElementById('productForm').reset();
    })
    .catch(error => {
        console.error('Error al agregar el producto:', error);
        alert('Error al agregar el producto');
    });
});
