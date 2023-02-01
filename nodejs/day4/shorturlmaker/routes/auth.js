const { request, response } = require("express");
const express = require("express");
const { register, login, identifyUser } = require("../controller/auth");

const router = express.Router();

router.post("/register", register);
router.get("/", identifyUser);
router.get("/auth");
router.post("/login", login);

module.exports = router;
