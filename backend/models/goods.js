const mongoose = require('mongoose');

const goodSchema = mongoose.Schema({
  name: String,
  price: [
    {
      date: Date.now,
      inValue: Number, // 进价
      outValue: Number, // 售价
    }
  ],
  category: {
    ref: 'category',
    type: mongoose.Schema.Types.ObjectId,
    autopopulate: true
  }, // 类别 米、杂粮、糕点、调味品、冷冻食品、
})

const goodModel = mongoose.model('goods', goodSchema);

module.exports = goodModel;