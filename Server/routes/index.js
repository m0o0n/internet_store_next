const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const brandCountryRouter = require('./brandCountryRouter')
const typeRouter = require('./typeRouter')
const subtypeRouter = require('./subtypeRouter')
const productRouter = require('./productRouter')

router.use('/user', userRouter)
router.use('/brandCountry', brandCountryRouter)
router.use('/type', typeRouter)
router.use('/subtype', subtypeRouter)
router.use('/product', productRouter)

module.exports = router