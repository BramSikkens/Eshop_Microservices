const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName:String,
    secondName:String,
    email:String,
    password:String,
});

module.exports = mongoose.model("User",schema);