const express = require("express");
const {
  getList,
  getListByUser,
  getListByTag,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/postController");
const postRouter = express.Router();

postRouter
  .get("/posts", getList)
  .get("/user/:id/post", getListByUser)
  .get("/tag/:id/post", getListByTag)
  .get("/post/:id", getPostById)
  .post("/post/create", createPost)
  .patch("/post/:id", updatePost)
  .delete("/post/:id", deletePost);

module.exports = postRouter;
