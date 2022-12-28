const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");
const userRouter = express.Router();

userRouter
  .get("/users", getUsers)
  .get("/user/:id", getUserById)
  .post("/users/create", createUser)
  .delete("/users/:id", deleteUser)
  .patch("/users/:id", updateUser);

module.exports = userRouter;
