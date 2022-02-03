const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: String,
  user: String,
  image: String,
  achievements: [
    {
      name: String,
      video: String,
      done: Boolean,
      wip: Boolean,
      days: Number,
    },
  ],
  globalDays: Number,
});
const categories = mongoose.model("categories", categoriesSchema);
module.exports = categories;
