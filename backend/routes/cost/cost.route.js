const Router = require('koa-router');
const routerUtil = require('../../utils/route.glue');
const costService = require('./cost.service');
const costRouter = new Router();
costRouter.prefix('/api/cost');
// get /api/cost 获取全部销售记录(带分页)
// 参数 page: Number

// post /api/cost 创建订单
/**
 * time: Date 订单购买时间
 * cost: Number 本订单总共消费
 * goods: goods list 商品历史记录
 * uid: user id Object_id 用户的id
 */

// delete /api/cost/:id 删除分类

// post /api/cost/:id 修改分类

// get /api/cost/search?good=长粒香大米
// 参数 keyword: string
// 返回值 进行模糊搜索的结果数组
routerUtil.routeGlue(costService, costRouter);
module.exports = costRouter;
