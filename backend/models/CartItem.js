// models/Cart.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  size: String,
  price: Number,
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', cartSchema);
