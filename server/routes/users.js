const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js')


router.get('/', userController.listAllUsers)

router.get('/:id', userController.listOneUser)

router.get('/mydata/:id', userController.getMyOwnData)

router.get('/check/:username', userController.checkUser)

router.post('/new', userController.registerUser)

router.patch('/update/:id', userController.updateUser)

router.delete('/delete/:id', userController.deleteUser)

module.exports = router