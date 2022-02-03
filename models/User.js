const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  avatar: {
    data: Buffer,
    contentType: String,
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
