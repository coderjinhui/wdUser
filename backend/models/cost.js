const mongoose = require('mongoose');
const costSchema = mongoose.Schema({
  cost: {
    // 总消费
    type: Number,
    default: 0
  },
  history: [
    // 消费记录
    {
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
    }
  ]
});
const costModel = mongoose.model('cost', costSchema);

module.exports = costModel;
