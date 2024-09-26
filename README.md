# Sistema de Gestión de Inventario

Este proyecto es una API básica para gestionar inventarios, creada con Node.js, Express y PostgreSQL utilizando Sequelize como ORM.

## Requisitos

- Node.js
- PostgreSQL

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Configurar la base de datos en `config/database.js`.
4. Ejecutar `npm run dev` para iniciar el servidor con nodemon.

## Endpoints

- `GET /api/inventory`: Obtiene todos los productos del inventario.
- `POST /api/inventory`: Crea un nuevo producto.
