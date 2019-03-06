const mongoose = require('mongoose');
const costSchema = mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }, // 用户id
  time: Date,
  cost: Number,
  goods: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goods'
      },
      num: Number,
      cost: Number
    }
  ]
});
const costModel = mongoose.model('cost', costSchema);

module.exports = costModel;
