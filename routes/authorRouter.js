const Router = require('express')
const router = new Router()
const authorController = require('../controllers/authorController')
const authMiddleware = require("../middleware/authMiddleware")

router.post('/registration', authorController.registration)
router.post('/login', authorController.login)
router.get('/auth',authMiddleware, authorController.check)
router.get('/',authorController.getAll)
router.get('/:id',authorController.getOne)
router.put('/', authMiddleware, authorController.update)
router.delete('/:id', authMiddleware, authorController.delete)

module.exports = router