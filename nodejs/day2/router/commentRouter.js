const express = require("express");
const { getList } = require("../controller/commentController");
const commentRouter = express.Router();

commentRouter.get("/comment", getList);

module.exports = commentRouter;
