const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const product = mongoose.model("prodcut", productSchema);

module.exports = product;
