const express = require('express')
const router = express.Router()
const userController = require('../controllers/usercontroller')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.post('/logout', userController.logoutUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)

module.exports = router