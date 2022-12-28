const User = require("../models/Users");

exports.getUsers = async (request, response) => {
  try {
    const user = await User.find();
    response.send(user);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

exports.getUserById = async (request, response) => {
  const _id = request.params.id;
  try {
    const user = await User.findById(_id);
    response.send(user);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.createUser = async (request, response) => {
  const user = request.body;
  try {
    const userData = await User.create(user);
    response.send(userData);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.updateUser = async (request, response) => {
  const _id = request.params.id;
  const changedItem = request.body;
  try {
    await User.findByIdAndUpdate({ _id }, changedItem);
    response.send({ message: "successfully updated" });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.deleteUser = async (request, response) => {
  const _id = request.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    response.send(user);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
