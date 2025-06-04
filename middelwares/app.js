const express = require("express");
const app = express();

const PORT = 3000;

//middelware => manipulate request and response between routes
//type : Application level middelware , Routes level middelware ,Thirdpary middelware ,Inbuilt middleware, Error handling middelware

const mid = (req, res, next) => {
  console.log("mid");
  next();
};

const middelware = (req, res, next) => {
  console.log("This is a middelware");
  next();
};

// app.use(mid); //global level middelware

app.use(express.json()); //inbuilt middelware

//third party middelware
//cors, multer

//error handling middelware
const error = (err, req, res, next) => {
  console.log("error");
  next();
};

const updateMid = (req, res, next) => {
  const { age } = req.body;
  req.user = {
    age: age,
    phone: 986754650,
  };
  next()
};

// app.get("/", mid,middelware, (req, res) => {   //application level middelware
app.get("/", (req, res) => {
  console.log("This is a home page");
  res.send("This is home page");
});

app.get("/user", updateMid, (req, res) => {
  console.log(req.user);
  res.send("This is user page");
});

app.listen(`${PORT}`, () => {
  console.log(`server is running at port number ${PORT}`);
});
