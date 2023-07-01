const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogcontroller')
const userController = require('../controllers/usercontroller')

router.get('/', userController.auth, blogController.listblog)
router.get('/:id', userController.auth, blogController.getblog)
router.post('/', userController.auth, blogController.createblog)
router.post('/:id', userController.auth, blogController.updateblog)
router.delete('/:id', userController.auth, blogController.deleteBlog)

module.exports = router