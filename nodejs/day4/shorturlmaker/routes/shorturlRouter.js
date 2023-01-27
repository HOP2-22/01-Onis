const express = require("express");
const {
  getUrl,
  createUrl,
  getUrlById,
} = require("../controller/shorturlController");
const shorturlRouter = express.Router();

shorturlRouter
  .get("/", getUrl)
  .post("/", createUrl)
  .post("/shorturl", getUrlById);

module.exports = shorturlRouter;
