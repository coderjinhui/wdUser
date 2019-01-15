const goodsModel = require('../../models/goods');
// get /api/goods 获取全部商品列表
function getAllGoods(){}

function createGood(){}

function deleteGood(){}

function editGood(){}

async function searchGood(ctx) {}


module.exports = [
  {url: '/', method: 'get', handler: getAllGoods},
  {url: '/', method: 'post', handler: createGood},
  {url: '/:id', method: 'delete', handler: deleteGood},
  {url: '/:id', method: 'post', handler: editGood},
  {url: '/search', method: 'get', handler: searchGood},
]