const { request, response } = require("express");
const Comment = require("../models/Comment");

exports.getList = async (request, response) => {
  try {
    const comment = await Comment.find({});
    response.send(comment);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};
