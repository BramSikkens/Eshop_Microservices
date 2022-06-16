const express = require("express");
const mongoose = require("mongoose");
const PORT = 6000;
const routes = require("./routes");

mongoose.connect("mongodb://localhost:27017/eshop_baskets").then(() => {
  const app = express();
  app.use(express.json());
  app.use(routes);
  app.listen(PORT, async () => {
    console.log("Basket api online");
  });
});
