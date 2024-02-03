const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.productcontroller.getAllUsers);
router.get('/:id', controllers.productcontroller.getUserById);
router.post('/createProduct', controllers.productcontroller.createProduct);
router.put('/:id', controllers.productcontroller.updateUser);
router.delete('/:id', controllers.productcontroller.deleteUser);

module.exports = router;

