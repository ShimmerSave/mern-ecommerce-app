const mongoose = require('mongoose');
const Product = require('../models/productModel');

// get all products
const getProducts = async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
};

// get single product
const getProduct = async (req, res) => {
  const { slug } = req.params;

  const product = await Product.findOne({slug: slug});

  if (!product) {
    return res.status(404).json({error: 'product not found'});
  };

  res.status(200).json(product);
};

// create a product
const createProduct = async (req, res) => {
  const {name, slug, image, category, description, price} = req.body;
  
  // add doc to db
  try {
    const product = await Product.create({name, slug, image, category, description, price});
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'invalid product id'});
  };

  const product = await Product.findOneAndDelete({_id: id});

  if (!product) {
    return res.status(400).json({error: 'product not found'});
  };

  res.status(200).json(product);
};

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'invalid product id'});
  };
  
  const product = await Product.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!product) {
    return res.status(400).json({error: 'product not found'});
  };

  res.status(200).json(product);

};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
}