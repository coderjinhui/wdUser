const Router = require('koa-router');

const user = new Router();
const userService = require('./user.service');
const routerUtil = require('../../utils/route.glue');

// get /api/user 获取全部用户

// post /api/user 创建用户
/* 参数
 ** name: string
 ** phone: string
 ** costList?: ObjectID 对应消费表数据
 **
 */
// 返回值 msg: success, data: 新创建的分类数据

// delete /api/category/:id 删除分类

// post /api/category/:id 修改分类
// 参数 name: string
// 返回值 data: 修改后的分类

// get /api/category/search?keyword=11
// 参数 keyword: string
// 返回值 进行模糊搜索的结果数组

user.prefix('/user');
routerUtil.routeGlue(userService, user);

module.exports = user;
