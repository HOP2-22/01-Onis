const { request, response } = require("express");
const express = require("express");
const { register, login } = require("../controller/auth");

const router = express.Router();

router.post("/register", register).get("/auth");
router.post("/login", login);

module.exports = router;
