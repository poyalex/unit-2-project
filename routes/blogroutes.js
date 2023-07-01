const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogcontroller')

router.get('/', blogController.listblog)
router.post('/', blogController.createblog)
router.post('/:id', blogController.updateblog)
router.delete('/:id', blogController.deleteBlog)

module.exports = router