const Router = require('koa-router');

const goods = new Router();
const goodService = require('./goods.service');

goods.prefix('/api/goods')

// get /api/goods 获取全部商品列表
// post /api/goods 添加商品
// delete /api/goods/:id 删除指定id商品
// post /api/goods/:id 修改指定id商品


module.exports = goods;