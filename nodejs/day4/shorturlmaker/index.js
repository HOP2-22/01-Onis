const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const shorturlRouter = require("./routes/shorturlRouter");
const authRouter = require("./routes/auth");
const urlRouter = require("./routes/shorturlRouter");
const connect = require("./database/index");

require("dotenv").config();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("mongoDB connected");
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/url", urlRouter);

const PORT = process.env.PORT || 7777;

connect();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
