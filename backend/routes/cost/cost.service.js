const costModel = require('../../models/cost');

// get /api/cost 带分页
// 每页数量限制为10条
async function getAll(ctx) {
  const query = ctx.request.query;
  const pageIndex = query.page ? query.page : 0;
  const pageSize = 10;
  try {
    const costs = await costModel
      .find({})
      .skip(pageSize * pageIndex)
      .limit(pageSize);
    ctx.body = {
      code: 0,
      data: costs
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

// post /api/cost 创建订单
/**
 * time: Date 订单购买时间: 服务端生成
 * goods: goods list 商品历史记录
 * uid: user id Object_id 用户的id
 */
async function addCost(ctx) {
  const body = ctx.request.body;
  const uid = body.uid;
  const time = new Date();
  const goods = body.goods;
  let costs = 0;
  goods.forEach(element => {
    costs += element.cost * 100;
  });
  costs /= 100;
  const obj = {
    cost: costs,
    time,
    uid,
    goods
  };
  const cost_model = new costModel(obj);
  const data = await cost_model.save();
  ctx.body = {
    code: 0,
    data: data
  };
}

// delete /api/cost/:id 删除订单
async function deleteCost(ctx) {
  const id = ctx.params;
  const data = await costModel.findOneAndRemove({ _id, id });
  ctx.body = {
    code: 0,
    data
  };
}

module.exports = [
  { url: '/', method: 'get', handler: getAll },
  { url: '/', method: 'post', handler: addCost },
  { url: '/:id', method: 'delete', handler: deleteCost }
  // { url: '/:id', method: 'post', handler: updateCategory },
  // { url: '/search', method: 'get', handler: searchCategory }
];
