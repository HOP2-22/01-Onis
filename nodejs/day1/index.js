const express = require("express");
const listRouter = require("./router/listRouter");
const mongoose = require("mongoose");
const URI = "mongodb+srv://onis:onis2468@cluster1.arlxnju.mongodb.net/test";

const app = express();
const PORT = 9999;

mongooose.connect(URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB holbogdloo");
});

app.use(express.json());

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/", listRouter, (req, res) => {
  response.send({ text: "hello world!" });
});

app.listen(9999, () => {
  console.log("server listening on 9999 port");
});
