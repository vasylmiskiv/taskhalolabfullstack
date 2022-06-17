import express from 'express';

const router = express.Router();

import getGoods  from '../controllers/goodsController.js'

router.route('/').get(getGoods);

export default router;