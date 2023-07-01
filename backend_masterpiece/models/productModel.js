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
  },
  pages:{
    type:Number,
    required:true,
  },
  author:{
    type:String,
    required:true,
  },
  img:{
    type:String,
    required:true
  },
  is_delete:{
    type:Boolean,
    default:false
  }
});

// Create the product model based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;