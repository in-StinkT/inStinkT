
const sequelize = require('../config/connection');
const axios = require('axios');
const Product = require('../models/Product');
const Scent = require('../models/Scent');
const scentValues = require('./scentAPIValues');


 //function for fetching specific link(in this case each 'scent' refinement)
const fetchScentProducts = async (scentVal) =>{
  try{
    const params = {
      api_key: process.env.ASIN_KEY,
        type: "search",
        search_term: "perfumes",
        category_id: "11057051",
        amazon_domain: "amazon.com",
        refinements: scentVal,
      }

    const products = await axios.get('https://api.asindataapi.com/request', { params })
    
    return products.data.search_results;
  }catch(err){
    console.log(err);
  }
}


//fetching all products by scent, returns an array of objects,
//each object having a scent property and a porducts property that has a value of an array of products.
const getAllProds = async () =>{
  try{
    let allProducts = [];
      await Promise.all(scentValues.map(async (scent,i)=>{
        let data ={
          scent: scent.name,
          scentID: scent.id,
          products: await fetchScentProducts(scent.value),
        }
        allProducts.push(data);
      }));
    return allProducts;
  }catch(err){
    console.log(err);
  }
}

//creating each product object to be seeded into database with appropriate properties matching our Models.
const createDBObj = async (array) =>{
  try{
    const scentData = await getAllProds();
    let DBproducts = [];
    scentData.forEach((obj,i)=>{
      obj.products.forEach((prod)=>{
        //declaring a price variable to parse through the price object of each product.
        let priceData;
        
         if(prod.price){
           if(Object.hasOwn(prod.price, 'value')){
             priceData = prod.price.value;
           }
           else{
             priceData = prod.price.name;
           }
         }
         else{
           priceData = null;
         }
         let noDollar;
         if(typeof priceData === 'string'){
           noDollar= parseFloat(priceData.replace(/\$/g,""),2);
         }
         if(typeof priceData === 'number'){
           noDollar= priceData;
         }
         else{
           noDollar = null;
         }

        //creating each individual product object for our Model.
        let product = {
          name: prod.title,
          description: prod.link,
          price: noDollar,
          manufacturer: prod.image,
          scent_id: obj.scentID,
        }
        DBproducts.push(product);
      })
    })
    await Product.bulkCreate(DBproducts);
  }catch(err){
    console.log(err);
  }
}


module.exports = createDBObj;