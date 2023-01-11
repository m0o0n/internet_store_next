const Router = require('express')
const router = new Router()
const subTypeController = require('../controllers/subTypeController')

router.post('/', subTypeController.create)
router.get('/', subTypeController.getAll)

module.exports = router