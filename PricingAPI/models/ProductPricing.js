const mongoose = require("mongoose");

const countryPrice = new mongoose.Schema({
  currency: String,
  discount: Boolean,
});

const schema = new mongoose.Schema({
  productId: String,
  originalPrice: Number,
  originalCurrency: String,
  originalCountry: String,
  countryPrices: {
    name: String,
    mapProperty: { type: Map, of: countryPrice },
  },
});

module.exports = mongoose.model("ProductPricing", schema);
