const Router = require('koa-router');

const user = new Router();
const userService = require('./user.service');
const routerUtil = require('../../utils/route.glue');

user.prefix('/user');

routerUtil.routeGlue(userService, user);

module.exports = user;
