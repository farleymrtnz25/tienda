const express = require('express');
const app = express();
const productosController = require('../../backend/controllers/productosController');

app.use(express.json());

app.get('/ventas', productosController.getVentas);
app.post('/ventas', productosController.addVenta);

exports.handler = app;