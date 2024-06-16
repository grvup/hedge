// backend/models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  stock: { type: Number, required: true },
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
