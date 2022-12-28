const express = require("express");
const { getList, addData } = require("../controller/list.controller");

const listRouter = express.Router();

listRouter.get("/List", getList);
listRouter.post("/add", addData);
listRouter.patch("/update", updateData);
listRouter.delete("/delete", deleteData);

module.exports = listRouter;
