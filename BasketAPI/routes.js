const express = require("express");
const router = express.Router();
const Basket = require("./model/Basket");
const BasketItem = require("./model/BasketItem");

router.post("/baskets", async (req, res) => {
  const newBasket = new Basket({
    customerId: req.body.customerId,
  });

  try {
    const saveBasketResult = await newBasket.save(newBasket);
    if (saveBasketResult) {
      res.status(200).json(saveBasketResult);
    }
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/baskets/:userId", async (req, res) => {
  const foundBasket = await Basket.findOne({
    customerId: req.params.userId,
  }).populate("items");
  if (foundBasket) {
    res.status(200).json(foundBasket);
  } else {
    const newUserBasket = new Basket({
      customerId: req.params.userId,
    });

    const newSavedBasket = await newUserBasket.save(newUserBasket);
    res.status(201).json(newSavedBasket);
  }
});

//add Item to basket
router.post("/basket/:id/item", async (req, res) => {
  try {
    const basket = await Basket.findOne({ customerId: req.params.id });
    // console.log(basket);
    if (!basket) res.status(400).send("Basket not found");

    const newItem = new BasketItem({
      productId: req.body.productId,
      productName: req.body.productName,
      quantity: req.body.quantity,
    });

    const savedNewItem = await newItem.save();

    basket.items.push(savedNewItem);

    const updatedBasket = await basket.save();
    res.json(updatedBasket);

    //console.log(updatedBasket);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/basket/:id/item/:itemId", async (req, res) => {});

module.exports = router;
