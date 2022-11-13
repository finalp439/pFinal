const express = require('express')
const { deleteProduct } = require('../controllers/Product/deleteProduct.js');
const { getAllProduct } = require('../controllers/Product/getAllProduct')
const { getOneProduct } = require("../controllers/Product/getOneProduct")

const router = express.Router()

router.delete('/:productId', deleteProduct)
router.get('/', getAllProduct),
router.get("/:productId", getOneProduct)


module.exports = router