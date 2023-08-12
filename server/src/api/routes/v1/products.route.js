const express = require('express');
const { validate } = require('express-validation');
const withTryCatch = require('../../middlewares/tryAndCatch');
const { getAllProducts } = require('../../controllers/products.controller');

const router = express.Router();

router
  .route('/')
  .get(
    (req, res, next) => withTryCatch(req, res, next, getAllProducts)
  );
// router
//   .route('/filterByTitle')
//   .get(
//     validate(filterByTitleValidation),
//     (req, res, next) => withTryCatch(req, res, next, getTicketByTitle)
//   );
// router
//   .route('/filterByTime')
//   .get(
//     validate(filterByTimeValidation),
//     (req, res, next) => withTryCatch(req, res, next, getTicketByTime)
//   );
// router
//   .route('/filter')
//   .get(
//     validate(filterValidation),
//     (req, res, next) => withTryCatch(req, res, next, getTicketByMultipleFields)
//   );
module.exports = router;
