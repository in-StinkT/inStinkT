
const sequelize = require('../config/connection');
const axios = require('axios');
const {Product} = require('../models');


// function to fetch product data from ASIN Data API and build database table
const fetchPerfumeData = async () => {
    const params = {
      api_key: process.env.ASIN_KEY,
        type: "search",
        amazon_domain: "amazon.com",
        search_term: "perfumes",
        sort_by: "price_low_to_high",
        category_id: "11057051",
      }
      sequelize.sync({force:true})
      // make the http GET request to ASIN Data API
      axios.get('https://api.asindataapi.com/request', { params })
      // creating objects with Product Model fields to be used to store in database.
        .then((response)=>{
            let products = [];
            for(let i = 0; i<response.data.search_results.length; i++){
              let priceData;
              if(Object.hasOwn(response.data.search_results[i], 'price')){
                priceData = response.data.search_results[i].price;
              }
              if(!Object.hasOwn(response.data.search_results[i], 'price')){
                priceData = 0;
              }
              products[i] = {
                name: response.data.search_results[i].title,
                description: response.data.search_results[i].link,
                price: priceData,
                manufacturer: response.data.search_results[i].image,
              }
            }
            return products;
        })
        // had to implement some extra logic to work around some API data fields missing
        .then((products)=>{
          for(let i = 0;i<products.length;i++){
            if(Object.hasOwn(products[i].price, 'value')){
              products[i].price = products[i].price.value;
            }
           if(!Object.hasOwn(products[i].price, 'value') && products[i].price.raw === 'Another way to buy'){
              let noDollar = products[i].price.name.replace(/\$/g,"");
              products[i].price = parseFloat(noDollar);
            }
            console.log(i,products[i].price);
          }
          return products;
        })
        // creating a products table with all of the fetched products
        .then((products)=>{
          Product.bulkCreate(products);
          return;
        }).catch(error => {
            console.log(error);
        })
  }

fetchPerfumeData();

