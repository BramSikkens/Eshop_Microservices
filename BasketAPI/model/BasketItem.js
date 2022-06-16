const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  productId: String,
  productName: String,
  quantity: Number,
});

module.exports = mongoose.model("BasketItem", schema);
