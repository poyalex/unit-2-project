const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogcontroller')

router.post('/', blogController.createblog)
router.post('/update', blogController.updateblog)
router.delete('/:id', blogController.deleteBlog)

module.exports = router