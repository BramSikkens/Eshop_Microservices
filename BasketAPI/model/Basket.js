const mongoose = require("mongoose");
const schema = mongoose.Schema({
  customerId: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BasketItem",
    },
  ],
});

module.exports = mongoose.model("Basket", schema);
