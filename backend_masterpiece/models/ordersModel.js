const mongoose = require("mongoose");

// Define the Order schema
const orderSchema = new mongoose.Schema({
  userID:{
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  products: {
    type:Array,
    required:true
  },
  quantity: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  total:{
    type:Number,
    required:true
  }
});

// Create the Order model
const Order = mongoose.model("Orders", orderSchema);

module.exports = Order;
