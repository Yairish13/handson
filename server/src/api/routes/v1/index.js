const express = require('express');
const httpStatus = require('http-status');

const productsRoutes = require('./products.route');
const router = express.Router();

router.get('/status', (req, res) => res.json({
    code: httpStatus.OK,
    message: 'ok',
  }));
  
  router.use('/products', productsRoutes);
  
  module.exports = router;