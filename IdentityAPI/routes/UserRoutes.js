const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const UserData = require("../models/UserData");

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      password: passwordHash,
      userData: {},
    });

    var savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var user = await User.findOne({ email: email });
  if (await bcrypt.compare(password, user.password)) {
    res.status(200).json(user);
  } else {
    res.status(401).send("Bad password");
  }
});

router.post("/user/:userId/userdata", async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true }
  );

  console.log(user);
  res.json(user);
});

router.get("/user/:userId/userdata", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json(user.userData);
});

module.exports = router;
