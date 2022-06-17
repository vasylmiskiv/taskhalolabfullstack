import  Good  from '../models/goodsModel.js';

const getGoods = async (req, res) => {
  await Good.find({}).then((goods) => {
    res.send(goods)
  })
}

export default getGoods;

