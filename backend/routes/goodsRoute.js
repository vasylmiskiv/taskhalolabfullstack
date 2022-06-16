const { Router } = require('express')

const { getGoods } = require('../controllers/goodsController.js')

const router = Router()

// connect to controllers
router.route('/').get(getGoods);

module.exports = router;