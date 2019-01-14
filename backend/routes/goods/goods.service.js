
function getAllGoods(){}

function createGood(){}

function deleteGood(){}

function editGood(){}


module.exports = [
  {url: '/', method: 'get', handler: getAllGoods},
  {url: '/', method: 'post', handler: createGood},
  {url: '/:id', method: 'delete', handler: deleteGood},
  {url: '/:id', method: 'post', handler: editGood},
]