const goodsModel = require('../../models/goods');

// get /api/goods 获取全部商品列表
async function getAllGoods(ctx) {
  try {
    let goods = await goodsModel.find({}).populate('category', '_id name');
    // console.log('goods data', goods);
    goods = simpleData(goods);

    ctx.body = {
      code: 0,
      data: goods
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

async function createGood(ctx) {
  const body = ctx.request.body;
  const name = body.name;
  const category = body.category;
  const price = {
    inValue: body.inValue,
    outValue: body.outValue,
    date: body.date
  };

  const goods = await goodsModel.findOne({ name });
  if (goods) {
    ctx.body = {
      code: 1,
      msg: '商品已经存在'
    };
  } else {
    const temp = new goodsModel({ name, category, price: [price] });
    const data = await temp.save();
    ctx.body = {
      code: 0,
      data: data
    };
    // console.log(goods);
  }
}

async function deleteGood(ctx) {
  const id = ctx.params.id;
  const res = await goodsModel.findOneAndRemove({ _id: id });
  ctx.body = {
    code: 0,
    data: res
  };
}

function editGood() {}

async function searchGood(ctx) {
  const query = ctx.request.query;
  const keyword = query.keyword;
  const condition = new RegExp(keyword);
  const ret = await goodsModel
    .find({ name: { $regex: condition } })
    .populate('category', '_id name');
  const res = simpleData(ret);
  ctx.body = {
    code: 0,
    data: res
  };
}

module.exports = [
  { url: '/', method: 'get', handler: getAllGoods },
  { url: '/', method: 'post', handler: createGood },
  { url: '/:id', method: 'delete', handler: deleteGood },
  { url: '/:id', method: 'post', handler: editGood },
  { url: '/search', method: 'get', handler: searchGood }
];

function simpleData(arr) {
  return arr.map(item => {
    let temp = {
      _id: item._id,
      name: item.name,
      category: item.category,
      price: item.price[0]
    };
    return temp;
  });
}
