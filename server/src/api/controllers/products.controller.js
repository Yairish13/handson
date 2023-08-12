const httpStatus = require('http-status');
const products = require('../../data/index')
// const { errNotFound, errMissingData } = require('../../utils/constans');
const createError = require('../handlers/createError');
const customAxios = require('../../config/axios');

exports.getAllProducts = async (req, res) => {
    // const products = await customAxios.get('/products');
    console.log(products);
    res.status(httpStatus.OK).json(products);
};
