const router = require('express').Router();
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;