const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/demo");
    console.log("Connected to database Sucessfully");
  } catch (error) {
    console.log("Unable to connect to database", error);
  }
};

module.exports = connect;
