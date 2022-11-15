const express = require('express')
const { transactionUpdate } = require('../controllers/Transaction/transactionUpdate.js')

const router = express.Router()

// example of a route with index controller get function
router.put('/', transactionUpdate)


module.exports = router