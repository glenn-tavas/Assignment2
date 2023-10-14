const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: 'Error creating product' });
  }
}

// Get a list of all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
}

// Get a specific product by ID
const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
}

// Update a product by ID
const updateProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error updating product' });
  }
}

// Delete a product by ID
const deleteProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  }
}

// Delete all products
const deleteAllProducts = async (req, res) => {
    try {
      // You can use the `deleteMany` method to delete all products from the database
      const result = await Product.deleteMany({});
      res.json({ message: 'All products have been deleted', result });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting all products' });
    }
  }

// Find products by name keyword
const findProductsByKeyword = async (req, res) => {
    try {
      const keyword = req.query.name; // Get the keyword from the query parameter
      if (!keyword) {
        return res.status(400).json({ error: 'Keyword is required' });
      }
  
      // Use a regular expression to perform a case-insensitive search for products containing the keyword
      const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
  
      if (products.length === 0) {
        return res.status(404).json({ message: 'No products found with the given keyword' });
      }
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error finding products by keyword' });
    }
  }  
    
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  deleteAllProducts,
  findProductsByKeyword
};
