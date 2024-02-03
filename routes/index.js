const express = require('express');
const router = express.Router();

// Require all route files
const userRoutes = require('./user'); // Replace with the actual file name of your user routes
const product=require('./product')
// Use the routes
router.use('/users', userRoutes); // You can change '/users' to any base path you prefer for your user routes
router.use('/product', product); 
module.exports = router;
