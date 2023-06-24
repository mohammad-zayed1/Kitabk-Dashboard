const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  quantity:{
    type:Number,
    required: true
  }
});

// Create the product model based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;