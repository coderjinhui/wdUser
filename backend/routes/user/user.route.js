const Router = require('koa-router');

const user = new Router();

const userService = require('./user.service');
const routerUtil = require('../../utils/route.glue');

// get /api/user 获取全部用户

// post /api/user 创建用户
/* 参数
 ** name: string
 ** phone: string 联系方式
 ** area: string 区域
 ** addr: string 地址
 ** gender: string 男|女
 ** costList?: ObjectID 对应消费表数据
 */
// 返回值 msg: success, data: 新创建的用户数据

// delete /api/user/:id 删除用户

// post /api/user/:id 修改用户
/** name?: string
 ** phone?: string 联系方式
 ** area?: string 区域
 ** addr?: string 地址
 ** gender?: string 性别
 */
// 返回值 data: 修改后的分类

// get /api/user/search?phone=11
// 参数 phone: string
// 返回值 根据手机号码查询用户

user.prefix('/api/user');
routerUtil.routeGlue(userService, user);

module.exports = user;
