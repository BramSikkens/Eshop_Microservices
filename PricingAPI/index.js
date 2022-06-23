const PORT = 5003;
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/eshop_pricing", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.listen(PORT, () => {
      console.log("Pricing API Up");
    });
  });
