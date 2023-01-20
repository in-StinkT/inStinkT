const router = require('express').Router();
const {Product} = require('../models');

router.get('/', async (req,res) => {
  const dbProductData = await Product.findAll();
  console.log(dbProductData);
  const products = dbProductData.map((product) => product.get({plain: true}));
  console.log(products[0]);
  res.render('all-products', {products, logged_in: req.session.logged_in});

});

router.get('/:id', async (req, res) => {
  const dbProductData = await Product.findByPk(req.params.id)
  const product = dbProductData.get({plain: true});

  const data = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    manufacturer: product.manufacturer,
    logged_in: req.session.logged_in
  }
  
  res.render('product', data)
})

module.exports = router;