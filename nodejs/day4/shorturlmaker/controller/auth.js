const Auth = require("../models/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/auth");
require("dotenv").config();

const register = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password || email.length == 0 || password.length == 0) {
    response.status(400).json({ message: "invalid credentials" });
    return;
  }

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = await Auth.create({ email, password: hashPassword });
    response.status(201).json({
      message: "success",
      data: user.email,
    });
  } catch (error) {
    response.send(error);
  }
};

const login = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({ message: "invalid credentials" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return response.status(400).json({ message: "invalid credentials" });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return response.status(400).json({ message: "invalid credentials" });
  }
  try {
    const authToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "1h" }
    );
    response.status(200).json({ message: "success", token: authToken });
  } catch (error) {
    response.send(error);
  }
};
const identifyUser = async (req, res) => {
  const token = req?.headers?.token;
  if (!token) {
    return res.status(401).json({ message: "no token provided" });
  }
  const data = await jwt.decode(token, process.env.ACCESS_TOKEN_KEY);
  res.status(200).json(data);
};

module.exports = {
  register,
  login,
  identifyUser,
};
