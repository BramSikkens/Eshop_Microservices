const mongoose = require("mongoose");

const ProductType = mongoose.Schema({
  _id: String,
  type: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("ProductType", ProductType);
