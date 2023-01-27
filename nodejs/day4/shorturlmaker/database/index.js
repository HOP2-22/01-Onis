const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_DB || "";

const connect = async (request, response) => {
  try {
    await mongoose.connect(url);
    console.log("database is successfully connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
