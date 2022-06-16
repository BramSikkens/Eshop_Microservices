const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8000;

const mongoose = require("mongoose"); // new
const Product = require("./models/Product");
const routes = require("./routes/productRoute");

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/eshop_products", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.listen(PORT, async () => {
      console.log("Server has started!");
    });
  });
