const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const PostSchema = new Schema({
  tag: { type: String },
  owner: { type: String },
});

const Post = model("posts", PostSchema);
module.exports = Post;
