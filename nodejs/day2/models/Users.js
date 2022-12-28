const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
  firstname: { type: String },
  age: { type: Number },
});

const User = model("users", UserSchema);
module.exports = User;
