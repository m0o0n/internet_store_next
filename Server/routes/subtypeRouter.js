const Router = require('express')
const router = new Router()
const subTypeController = require('../controllers/subTypeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), subTypeController.create)
router.get('/', subTypeController.getAll)

module.exports = router