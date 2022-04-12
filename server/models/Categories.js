const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: String,
  user: String,
  achievements: Object,
  globalDays: Number,
});
const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;
