const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String
});

// Create a Product model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
