const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'nobody'
  },
  phone: String,
  gender: String, //男|女
  area: String,
  addr: String,
  costList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cost'
  } //消费记录
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

let userTable = {
  name: '姓',
  phone: '1838393399339',
  id: 'objectid', // 自动生成
  area: '黄浦区',
  addr: '601弄90号201',
  costList: 'ObjectId(xxxx)'
};
