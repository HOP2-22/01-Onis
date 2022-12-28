const { request, response } = require("express");
const Post = require("../models/Post");

exports.getList = async (request, response) => {
  try {
    const post = await Post.find({});
    response.send(post);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

exports.getListByUser = async (request, response) => {
  const owner = request.params.id;
  try {
    const post = await Post.find({ owner: owner });
    response.send(post);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.getListByTag = async (request, response) => {
  const tag = request.params.id;
  try {
    const post = await Post.find({ tag: tag });
    response.send(post);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.getPostById = async (request, response) => {
  const _id = request.params.id;
  try {
    const post = await Post.find({ _id });
    response.send(post);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.createPost = async (request, response) => {
  const details = request.body;
  try {
    const postData = await Post.create(details);
    response.send(postData);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.updatePost = async (request, response) => {
  const _id = request.params.id;
  const changeItem = request.body;
  try {
    await Post.findByIdAndUpdate({ _id }, changeItem);
    response.send("successfully updated");
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};

exports.deletePost = async (request, response) => {
  const _id = request.params.id;
  try {
    const postData = await Post.findByIdAndDelete({ _id });
    response.send(postData);
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
};
