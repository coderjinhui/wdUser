const Router = require('koa-router');
const routerUtil = require('../../utils/route.glue');
const goodsRouter = new Router();
const goodService = require('./goods.service');

goodsRouter.prefix('/api/goods');

// get /api/goods 获取全部商品列表

/** 添加商品参数
 * name: string,
 * category: id,
 * date: Date,
 * inValue: number
 * outValue: number
 * */
// post /api/goods 添加商品

// delete /api/goods/:id 删除指定id商品
// post /api/goods/:id 修改指定id商品

// get /api/goods/search?keyword=11
// 参数 keyword: string
// 返回值 进行模糊搜索的结果数组
routerUtil.routeGlue(goodService, goodsRouter);

module.exports = goodsRouter;
