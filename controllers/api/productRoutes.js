const router = require('express').Router();
const {Product} = require('../../models');
const axios = require('axios');
const Scent = require('../../models/Scent');


// GET route for all products
router.get('/', async (req, res) => {
    try{
        const productData = await Product.findAll(
            {
            include: [{model: Scent, attributes:['name']}],
        }
        )
        res.status(200).json(productData);
    }catch(err){
        res.status(500).json(err);
    }
});





module.exports =  router;

