const Good = require('../models/goodsModel.js')

// GET reviews
async function getGoods(req, res) {
  await Good.find({}).then((goods) => {
    res.send(goods)
  })
}

module.exports = {
  getGoods,
}

