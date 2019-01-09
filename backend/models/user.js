const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'nobody'
  },
  phone: String,
  cost: {
    type: Number,
    default: 0
  },
  area: String,
  addr: String,
  costList: [
    {
      time: Date,
      cost: Number,
      goods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'goods'
      }]
    }
  ]
})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;



let userTable = {
  name: '姓',
  phone: '1838393399339',
  id: 'objectid',// 自动生成
  cost: '100元', // 总消费
  area: '黄浦区', 
  addr: '601弄90号201',
  costList: [
    {
      time: 'time',
      cost: '50元',
      item: [
        {
          name: '猫粮',
          num: '10斤',
          cost: '50元'
        }
      ]
    }
  ]
}