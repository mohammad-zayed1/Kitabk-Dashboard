const Order = require("../models/ordersModel");
const Product = require('../models/productModel');

const addOrder = async (req, res) => {
  try {
    const { userID, customerName, quantity, products, address, phone, total } =
      req.body;
    const newOrder = await Order({
      userID: userID,
      customerName: customerName,
      products: products,
      address: address,
      phone: phone,
      quantity: quantity,
      total: total,
    });
newOrder.save();


// Map the products to an array of update operations
const updateOperations = products.map(({ _id, count }) => ({
    updateOne: {
      filter: { _id: _id },
      update: { $inc: { quantity: -count } },
    },
  }));
  
  // Update the quantities of the products in the database
  Product.bulkWrite(updateOperations)
    .then((result) => {
      console.log('Quantities updated successfully');
    })
    .catch((error) => {
      console.error('Error updating quantities:', error);
    });
 



    res.status(200).json("product added successfully");
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};

const showOrder = async (req, res) => {
  try {
    const products = await Order.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "cannot get products" });
  }
};

const ordersForUser = async (req , res)=>{
    try{
        const {id} = req.params
        const userOrders = await Order.find({userID : id})
        res.json(userOrders);
    }catch(err){
        res.status(500).json({ error: "cannot get orders for this user" });
    }
}

module.exports = {
  addOrder,
  showOrder,
  ordersForUser
};
