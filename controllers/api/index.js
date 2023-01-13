const router = require('express').Router();
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;