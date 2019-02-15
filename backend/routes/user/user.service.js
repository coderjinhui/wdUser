const userModel = require('../../models/user');

// get /api/user 获取全部商品列表
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

module.exports = [
  // {url: '/', method: 'get', handler: getAll},
  // {url: '/add', method: 'post', handler: add},
  // {url: '/:phone', method: 'get', handler: getOne}
];
