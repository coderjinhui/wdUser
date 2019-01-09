const Router = require('koa-router');

const goods = new Router();
const goodService = require('./goods.service');

goods.prefix('/goods')

// goods.get('/', goodService.getAll);
// goods.post('/add', goodService.add);
// goods.get('/:gid', goodService.getOne);


module.exports = goods;