const Router = require('koa-router');

const user = new Router();
const userService = require('./user.service');

user.prefix('/user');

/**
 * 获取全部用户信息
 * url: /user
 * 返回值
 * {
 *   name: string, 用户名
 *   id: objectid
 *   cost: number, 购买总额
*    costList: [{ 单次购买物品
*      time: time,
*      cost: number,
*      item: [{
*        name: 'dongtai',
*        number: number斤,
*        cost: 元
*      }]
*    }]
 * }
 */
let ret = {
  name: 'string',
  id: 'objectid',
  cost: '100元',
  costList: [
    {
      time: 'time',
      cost: '50元',
      item: [
        {
          name: '猫粮',
          num: '10斤',
          cost: '50元'
        }
      ]
    }
  ]
}
user.get('/', userService.getAll);
user.post('/add', userService.add);
user.get('/:phone', userService.getOne);
// user.post('/add');

module.exports = user;

