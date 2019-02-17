const categoryModel = require('../../models/category');
const goodsModel = require('../../models/goods');

// get / 获取全部分类
async function getAllCategory(ctx) {
  try {
    const category = await categoryModel.find({});
    ctx.body = {
      code: 0,
      data: category
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

// post / 创建分类
async function createCategory(ctx) {
  const body = ctx.request.body;
  const name = body.name;
  const category = await categoryModel.findOne({ name });
  if (category) {
    ctx.body = {
      code: 0,
      data: category
    };
  } else {
    const temp = new categoryModel({ name });
    const data = await temp.save();
    ctx.body = {
      code: 0,
      data: data
    };
  }
}

// delete /:id 删除分类
async function deleteCategory(ctx) {
  const params = ctx.params;
  const id = params.id;
  const ret = await categoryModel.findOneAndRemove({ _id: id });
  const res = await goodsModel.deleteMany({ category: id });
  ctx.body = {
    code: 0,
    data: ret
  };
}

// post /:id 修改分类
async function updateCategory(ctx) {
  const id = ctx.params.id;
  const body = ctx.request.body;
  const name = body.name;
  const ret = await categoryModel.findOneAndUpdate({ _id: id }, { name });
  ctx.body = {
    code: 0,
    data: ret
  };
}

// get /search?keyword=1
async function searchCategory(ctx) {
  const query = ctx.request.query;
  const keyword = query.keyword;
  const condition = new RegExp(keyword);
  const res = await categoryModel.find({ name: { $regex: condition } });
  console.log(res);
  ctx.body = {
    code: 0,
    data: res
  };
}

module.exports = [
  { url: '/', method: 'get', handler: getAllCategory },
  { url: '/', method: 'post', handler: createCategory },
  { url: '/:id', method: 'delete', handler: deleteCategory },
  { url: '/:id', method: 'post', handler: updateCategory },
  { url: '/search', method: 'get', handler: searchCategory }
];
