const express = require("express");
const connect = require("./connectDb");
const User = require("./userModel");
const Product = require("./productModel");
const app = express();
connect();

app.use(express.json());
app.post("/createUser", async (req, res) => {
  const { name, age, phone } = req.body;
  let responseInfo = await new User({
    name,
    age,
    phone,
  });
  responseInfo = await responseInfo.save();
  res.send(responseInfo);
});

app.post("/createProduct", async (req, res) => {
  const { name, price, category } = req.body;

  let responseInfo = await new Product({
    name,
    price,
    category,
  });
  responseInfo = await responseInfo.save();
  res.send(responseInfo);
});
app.listen(3000, () => {
  console.log("server is running...");
});
