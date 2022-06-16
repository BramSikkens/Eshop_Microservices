const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const Product = require("../models/Product");
const StatusCodes = require("http-status-codes").StatusCodes;
const ReasonPhrases = require("http-status-codes").ReasonPhrases;

router.get("/products", async (req, res) => {
  const product = await Product.find();
  res.send(product);
});

router.get("/products/:id", async (req, res) => {
  try {
    var receivedProduct = await Product.findById(req.params.id);
    if (receivedProduct == null) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json(receivedProduct);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err.message);
  }
});

router.post("/products", async (req, res) => {
  try {
    var newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      features: req.body.features,
    });
    var savedProduct = await newProduct.save();
    res.status(StatusCodes.OK).json(savedProduct);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err.message);
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    await Product.deleteOne({ id: req.params.id });
    res.status(StatusCodes.OK).send(ReasonPhrases.OK);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err.message);
  }
});

module.exports = router;
