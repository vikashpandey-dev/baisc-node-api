const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/getuser', controllers.userController.getAllUsers);
router.get('/', controllers.userController.getUserById);
router.post('/createUser', controllers.userController.createUser);
router.post('/update', controllers.userController.updateUser);
router.delete('/', controllers.userController.deleteUser);

module.exports = router;

