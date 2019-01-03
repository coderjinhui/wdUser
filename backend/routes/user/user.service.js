

const userModel = require('../../models/user');


async function getAll(ctx) {
  const data = await userModel.find({});
  if(data) {
    ctx.body = {
      code: 0,
      data
    };
  }else {
    ctx.body = {
      code: 1,
      data: 'no data'
    };
  }
}

let inusertable = {
  name: 'string',
  phone: 'string',
  id: 'objectid',
  cost: '100元',
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
const inpostbody = {
	"name": "string",
	"phone": "18252588721",
	"costItem": {
      "time": "2018-10-1",
      "cost": 100,
      "item": [
        {
          "name": "猫粮",
          "num": 10,
          "single": 10,
          "cost": 100
        }
      ]
    }
}

async function add (ctx) {
  const body = ctx.request.body;
  const phone = body.phone;
  const user = await table.findOne({phone});
  if(user){
    // 有用户
    user.costList.push(body.costItem);
    user.cost = (user.cost*100 + body.costItem.cost*100)/100;
    await table.findOneAndReplace({phone}, user);
  }else {
    // 没有用户
    let obj = {};
    obj.name = body.name;
    obj.phone = body.phone;
    obj.cost = body.costItem.cost;
    obj.costList = [];
    obj.costList.push(body.costItem);
    await table.insertOne(obj);
  }
  ctx.body = {
    code: 0,
    data: 'success'
  };
}

async function getOne(ctx) {
  const phone = ctx.params.phone;
  const user = await table.findOne({phone});
  if(user) {
    ctx.body = {
      code: 0,
      data: user
    }
  }else {
    ctx.body = {
      code: 1,
      data: 'no data'
    }
  }
}
module.exports = {
  getAll,
  add,
  getOne
}