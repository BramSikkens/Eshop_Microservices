const PORT = 5001;
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/UserRoutes");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/eshop_identity", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.listen(PORT, () => {
      console.log("Identity API Up");
    });
  });
