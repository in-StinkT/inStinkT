const router = require('express').Router();
const { Product } = require('../models');

router.get('/', async (req, res) => {
  try {
    const data = { statusCode: res.statusCode, message: 'hello' };
    res.render('index', data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/product', async (req,res) => {
//   try {
//     const dbProductData = await Product.findAll();
//     const products = dbProductData.map((product) => product.get({plain: true}));

//     res.render('product', {products});

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', async (req, res) => {
  // if(req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
res.render('login', {loggedIn: req.session.logged_in});
});

module.exports = router;