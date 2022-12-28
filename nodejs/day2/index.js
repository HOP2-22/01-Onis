const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const commentRouter = require("./router/commentRouter");
const URI =
  "mongodb+srv://onis:onis2468@cluster1.arlxnju.mongodb.net/blog?retryWrites=true&w=majority";

mongoose.connect(URI);

mongoose.connection.once("open", () => {
  console.log("mongoDB connected");
});

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(postRouter);
app.use(commentRouter);

mongoose.connect(
  "mongodb+srv://onis:onis2468@cluster1.arlxnju.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const port = 9999;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
