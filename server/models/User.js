const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    unique: true,
    type: String,
  },
  avatar: {
    type: Array,
  },
  email: {
    unique: true,
    type: String,
  },
  password: String,
  level: Number,
  processlevel: Number,
  categories: String,
  items: String,
  activity: Number,
});
const User = mongoose.model("User", userSchema);
module.exports = User;
