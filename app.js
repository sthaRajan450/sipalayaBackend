const express = require("express");

const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello welcome to home route");
});

app.listen(3000, () => {
  console.log("server is running at port 3000 ....");
});
