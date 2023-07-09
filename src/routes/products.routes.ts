const productsRoutes = require('express').Router();

const productsController = require('../controllers/products/products.controller');

productsRoutes.get('/', productsController.getProducts);
productsRoutes.get('/:id', productsController.getProduct);
productsRoutes.post('/', productsController.createProduct);
productsRoutes.put('/:id', productsController.updateProduct);
productsRoutes.delete('/:id', productsController.deleteProduct);

module.exports = productsRoutes;