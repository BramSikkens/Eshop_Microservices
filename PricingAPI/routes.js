const express = require("express");
const router = express.Router();

const ProductPricing = require("./models/ProductPricing");

router.post("/product/:id", async (req, res) => {
  const newProductPricing = new ProductPricing({
    productId: req.params.id,
    originalPrice: req.body.originalPrice,
    originalCurrency: req.body.originalCurrency,
    originalCountry: req.body.originalCountry,
  });

  try {
    const savedResult = await newProductPricing.save();
    res.status(201).json(savedResult);
  } catch (e) {}
});

router.get("/product/:id", async (req, res) => {
  try {
    const productPricing = await ProductPricing.findOne({
      productId: req.params.id,
    });
    if (productPricing) res.status(200).json(productPricing);
    res.status(400).send("Could not find pricing");
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;
