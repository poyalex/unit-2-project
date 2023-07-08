const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')
const blogController = require('../controllers/blogcontroller')


router.get('/', userController.auth, blogController.listBlog)
router.get('/:id', userController.auth, blogController.getBlog)
router.post('/', userController.auth, blogController.createBlog)
router.put('/:id', userController.auth, blogController.updateBlog)
router.delete('/:id', userController.auth, blogController.deleteBlog)

module.exports = router