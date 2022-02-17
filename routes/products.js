var express = require('express');
var app = express.Router();
var productModule = require('../modules/productModule');
var authorizeModule = require('../modules/authorize');

app.get('/get', productModule.getProduct);
app.post('/create', authorizeModule.isAdmin, productModule.createProduct);
app.put('/update/:id', authorizeModule.isAdmin, productModule.updateProduct);
app.delete('/remove/:id', authorizeModule.isAdmin, productModule.deleteProduct);

module.exports = app;