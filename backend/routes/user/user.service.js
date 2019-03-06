const userModel = require('../../models/user');

// get /api/user 获取全部商品列表
async function getAllUsers(ctx) {
  try {
    let users = await userModel.find({});
    // console.log('goods data', goods);

    ctx.body = {
      code: 0,
      data: users
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

async function createUser(ctx) {
  const body = ctx.request.body;
  const name = body.name;
  const phone = body.phone;
  const gender = body.gender;
  const area = body.area;
  const addr = body.addr;

  const user = {
    name,
    phone,
    gender,
    area,
    addr
  };

  const userData = await userModel.findOne({ phone });
  if (userData) {
    ctx.body = {
      code: 1,
      msg: '该用户已经存在'
    };
  } else {
    const temp = new userModel(user);
    const data = await temp.save();
    ctx.body = {
      code: 0,
      data: data
    };
  }
}

async function deleteUser(ctx) {
  const id = ctx.params.id;
  const res = await userModel.findOneAndRemove({ _id: id });
  ctx.body = {
    code: 0,
    data: res
  };
}

async function editUser(ctx) {
  const id = ctx.params.id;
  const body = ctx.request.body;
  const name = body.name;
  const gender = body.gender;
  const phone = body.phone;
  const area = body.area;
  const addr = body.addr;
  const user = { name, gender, phone, area, addr };
  try {
    const res = await userModel.findOneAndUpdate({ _id: id }, user);
    ctx.body = {
      code: 0,
      data: res
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

async function searchUser(ctx) {
  const query = ctx.request.query;
  const phone = query.phone;
  const condition = new RegExp(phone);
  try {
    const user = await userModel.find({
      $or: [
        { name: { $regex: condition } },
        { area: { $regex: condition } },
        { addr: { $regex: condition } },
        { phone: { $regex: condition } }
      ]
    });

    ctx.body = {
      code: 0,
      data: user
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

module.exports = [
  { url: '/', method: 'get', handler: getAllUsers },
  { url: '/', method: 'post', handler: createUser },
  { url: '/:id', method: 'delete', handler: deleteUser },
  { url: '/:id', method: 'post', handler: editUser },
  { url: '/search', method: 'get', handler: searchUser }
];
