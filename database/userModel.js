const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
