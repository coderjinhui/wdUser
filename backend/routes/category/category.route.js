const Router = require('koa-router');
const routerUtil = require('../../utils/route.glue');
const categoryService = require('./category.service');
const categoryRouter = new Router();

categoryRouter.prefix('/api/category');

// get /api/category 获取全部分类
// post /api/category 创建分类
// delete /api/category/:id 删除分类
// post /api/category/:id 修改分类

routerUtil.routeGlue(categoryService, categoryRouter);

module.exports = categoryRouter;