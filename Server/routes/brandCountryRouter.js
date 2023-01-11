const Router = require('express')
const router = new Router()
const brandCountryController = require('../controllers/brandCountryController')

router.post('/', brandCountryController.create)
router.get('/', brandCountryController.getAll)

module.exports = router