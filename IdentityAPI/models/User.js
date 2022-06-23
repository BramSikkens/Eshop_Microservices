const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: String,
  password: String,
  userData: {
    firstName: String,
    secondName: String,
    address: {
      country: String,
      province: String,
      postalCode: String,
      city: String,
      street: String,
      number: String,
    },
    sex: "Male" | "Female",
    birthDate: Date,
  },
});

module.exports = mongoose.model("User", schema);
