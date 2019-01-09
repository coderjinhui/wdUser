const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: String, // 类别 米、杂粮、糕点、调味品、冷冻食品
})
const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;