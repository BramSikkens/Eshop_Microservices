const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  features: {
    type: Map,
    of: String,
  },
  productType:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"ProductType"
  }
});

module.exports = mongoose.model("Product", schema);
