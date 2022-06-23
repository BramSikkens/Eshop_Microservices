const express = require("express");
const mongoose = require("mongoose");
const PORT = 8003;
const routes = require("./routes");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/eshop_orders").then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(routes);
  app.listen(PORT, async () => {
    console.log("Order api online");
  });
});
