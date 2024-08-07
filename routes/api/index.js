const router = require('express').Router();
//const thoughtRoutes = require('./thoughtroutes');
const thoughtroutes = require('./thoughtroutes');
const userRoutes = require('./userroutes');

//localhost:3001/api
router.use('/user', userRoutes);

//router.use('/thought', thoughtRoutes);

module.exports = router;
