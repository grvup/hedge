// backend/models/Order.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  customer: { type: String, required: true },
  items: { type: [ItemSchema], required: true },
  status: { type: String, required: true },
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
