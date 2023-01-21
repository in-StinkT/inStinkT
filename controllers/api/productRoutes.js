const router = require('express').Router();
const {Product} = require('../../models');
const axios = require('axios');
const Scent = require('../../models/Scent');


// GET route for all products
router.get('/page=:num', async (req, res) => {
    try{
        const pageNum = req.params.num;        
        const productData = await Product.findAndCountAll(
            {
            include: [{model: Scent, attributes:['name']}],
            limit: 40,
            offset: 40 * (pageNum-1),
        }
        )
        res.status(200).json(productData);
    }catch(err){
        res.status(500).json(err);
    }
});





module.exports =  router;

