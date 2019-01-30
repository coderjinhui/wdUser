const goodsModel = require('../../models/goods');
const categoryModel = require('../../models/category');

// get /api/goods 获取全部商品列表
async function getAllGoods(ctx) {
  try {
    let goods = await goodsModel.find({}).populate('category', '_id name');
    // console.log('goods data', goods);
    goods = simpleData(goods);

    ctx.body = {
      code: 0,
      data: goods
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: JSON.stringify(err)
    };
  }
}

async function createGood(ctx) {
  const body = ctx.request.body;
  const name = body.name;
  const category = body.category;
  const price = {
    inValue: body.inValue,
    outValue: body.outValue,
    date: body.date
  };

  const goods = await goodsModel.findOne({ name });
  if (goods) {
    ctx.body = {
      code: 1,
      msg: '商品已经存在'
    };
  } else {
    const temp = new goodsModel({ name, category, price: [price] });
    const data = await temp.save();
    ctx.body = {
      code: 0,
      data: data
    };
    // console.log(goods);
  }
}

async function deleteGood(ctx) {
  const id = ctx.params.id;
  const res = await goodsModel.findOneAndRemove({ _id: id });
  ctx.body = {
    code: 0,
    data: res
  };
}

async function editGood(ctx) {
  const id = ctx.params.id;
  const body = ctx.request.body;
  const name = body.name;
  const category = body.category;
  const price = {
    inValue: body.inValue,
    outValue: body.outValue,
    date: body.date
  };
  const good = await goodsModel.findOne({ _id: id });
  good.name = name;
  good.category = category;
  const isSame =
    good.price[0].inValue === price.inValue && good.price[0].outValue;
  if (!isSame) {
    good.price.unshift(price);
  }
  const res = await goodsModel.findOneAndUpdate({ _id: id }, good);
  if (res) {
    ctx.body = {
      code: 0,
      data: res
    };
  } else {
    ctx.body = {
      code: 1,
      data: '修改失败'
    };
  }
}

async function searchGood(ctx) {
  const query = ctx.request.query;
  const keyword = query.keyword;
  if (keyword === 'all') {
    await getAllGoods(ctx);
    return;
  }
  const condition = new RegExp(keyword);
  const goods = await goodsModel
    .find({ name: { $regex: condition } })
    .populate('category', '_id name');
  const cate = await categoryModel.find({ name: { $regex: condition } });
  let res = [];
  if (cate.length <= 0 && goods.length <= 0) {
    // 没查到结果
    res = [];
  } else if (cate.length > 0 && goods.length > 0) {
    // 两边都查到了结果
    let category_id = cate.map(item => {
      return { category: item._id };
    });
    let ret = await goodsModel
      .find({ $or: category_id })
      .populate('category', '_id name');
    let ret2 = goods.filter(item => {
      const id = item._id;
      for (let i = 0; i < ret.length; i++) {
        if (ret[i]._id.toString() === id.toString()) {
          return false;
        }
      }
      return true;
    });
    res = [...ret, ...ret2];
  } else if (goods.length > 0) {
    // 商品表查到结果
    res = goods;
  } else if (cate.length > 0) {
    // 分类表查到结果
    let category_id = cate.map(item => {
      return { category: item._id };
    });
    const ret = await goodsModel
      .find({ $or: category_id })
      .populate('category', '_id name');
    res = ret;
  }
  res = simpleData(res);
  ctx.body = {
    code: 0,
    data: res
  };
}

module.exports = [
  { url: '/', method: 'get', handler: getAllGoods },
  { url: '/', method: 'post', handler: createGood },
  { url: '/:id', method: 'delete', handler: deleteGood },
  { url: '/:id', method: 'post', handler: editGood },
  { url: '/search', method: 'get', handler: searchGood }
];

function simpleData(arr) {
  if (arr.length === 0) {
    return [];
  }
  return arr.map(item => {
    let temp = {
      _id: item._id,
      name: item.name,
      category: item.category,
      price: item.price[0]
    };
    return temp;
  });
}
