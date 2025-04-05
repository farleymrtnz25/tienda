const express = require('express');
const app = express();
const productosController = require('../../backend/controllers/productosController');

app.use(express.json());

app.get('/productos', productosController.getProductos);
app.post('/productos', productosController.addProducto);

exports.handler = app;