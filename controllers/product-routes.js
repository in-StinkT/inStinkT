const router = require('express').Router();
const {Product} = require('../models');
const Scent = require('../models/Scent');

router.get('/page=:num', async (req,res) => {
  try{
    let isFirst = true;
    let notLast = true;
    const pageNum = req.params.num;
    const dbProductData = await Product.findAll({
      limit: 39,
      offset: 39 * (pageNum-1),
      include:[{model: Scent}],
    });

    let nextPage = parseInt(req.params.num) + 1
    let previousPage = parseInt(req.params.num) - 1
    if(dbProductData.length<39){
      nextPage = null;
      notLast = false;
    }
    if(pageNum>1){
      isFirst = false;
    }
    const products = dbProductData.map((product) => product.get({plain: true}));
    res.render('all-products', {
      products, 
      logged_in: req.session.logged_in, 
      nextP: nextPage,
      previousP: previousPage, 
      notLast,
      isFirst,
    });
  }catch(err){
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  const dbProductData = await Product.findByPk(req.params.id,
    {
      include:[{model: Scent, attributes:['name']}],
    });
  const product = dbProductData.get({plain: true});

  const data = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    manufacturer: product.manufacturer,
    scent: product.scent.name,
    logged_in: req.session.logged_in
  }
  
  res.render('product', data)
})

module.exports = router;