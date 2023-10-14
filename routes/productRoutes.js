const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Import the productController

// Create a new product
router.post('/product', productController.createProduct);

// Get a list of all products
router.get('/product', productController.getAllProducts); // Use the getAllProducts function

// Get a specific product by ID
router.get('/product/:id', productController.getProductById); // Use the getProductById function

// Update a product by ID
router.put('/product/:id', productController.updateProductById); // Use the updateProductById function

// Delete a product by ID
router.delete('/product/:id', productController.deleteProductById); // Use the deleteProductById function

// Delete all products
router.delete('/product', productController.deleteAllProducts); // Use the deleteAllProducts function

// Find products by name keyword
router.get('/product', productController.findProductsByKeyword); // Use the findProductsByKeyword function

module.exports = router;

