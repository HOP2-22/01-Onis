const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const UrlSchema = new Schema({
  original: { type: String },
  shorturl: { type: String },
});

const Url = model("url", UrlSchema);
module.exports = Url;
