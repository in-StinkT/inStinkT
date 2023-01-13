const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api')
const productRoutes = require('./product-routes')

router.use('/api', apiRoutes);
router.use('/product', productRoutes);
router.use('/', homeRoutes);

module.exports = router;