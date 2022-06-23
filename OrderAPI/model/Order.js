const mongoose = require("mongoose");
const schema = mongoose.Schema({
  customerId: String,
  items: [
    {
      productId: String,
      ProductTitle: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalPrice: Number,
  payementType: String,
  currency: String,
  orderDate: Date,
  status: String,
  deliveryAdres: {
    street: String,
    housNr: String,
    postalCode: String,
    country: String,
  },
});

module.exports = mongoose.model("Order", schema);
