const router = require('express').Router();
// const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;