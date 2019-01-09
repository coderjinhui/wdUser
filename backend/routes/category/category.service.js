const categoryModel = require('../../models/category');

// get / 获取全部分类
async function getAllCategory(ctx) {
  const category = categoryModel.find({});
  ctx.code = 200;
  ctx.body = {
    data: category
  }
}

// post / 创建分类
async function createCategory(ctx) {

}

// delete /:id 删除分类
async function deleteCategory(ctx) {

}

// post /:id 修改分类
async function updateCategory(ctx) {

}

module.exports = [
  {url: '/1', method: 'get', handler: getAllCategory},
  {url: '/2', method: 'post', handler: createCategory},
  {url: '/3:id', method: 'delete', handler: deleteCategory},
  {url: '/4:id', method: 'post', handler: updateCategory}
]