const router = require('express').Router();
//const thoughtRoutes = require('./thoughtroutes');
const userRoutes = require('./userroutes');

router.use('/user', userRoutes);
//router.use('/thought', thoughtRoutes);

module.exports = router;
