const express = require('express')


const transactionRoutes = require("./transactionRoutes")

const reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require('./UserRoutes')
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes')



const router = express.Router()

// example of a route with index controller get function

router.use("/transactions", transactionRoutes)
router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use('/products', productRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/auth',authRoutes)







//router only on plural

module.exports = router