const mongoose = require('mongoose');
const costSchema = mongoose.Schema({
  cost: {
    type: Number,
    default: 0
  },
  history: [
    {
      time: Date,
      cost: Number,
      goods: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'goods'
        }
      ]
    }
  ]
});
const costModel = mongoose.model('cost', costSchema);

module.exports = costModel;
