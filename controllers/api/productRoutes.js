const router = require('express').Router();

router.get('/', async (req, res) => {

});

const axios = require('axios');

// set up the request parameters
const params = {
api_key: process.env.RAINFOREST_KEY,
  domain: "amazon.com",
  type: "standard",
  parent_id: "11056591"
}
//Testing fetches
// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/categories', { params })
.then(response => {
    // print the JSON response from Rainforest API
    console.log(JSON.stringify(response.data, 0, 2));

  }).catch(error => {
// catch and print the error
console.log(error);
})

//Testing fetches
const params2 = {
    api_key: process.env.ASIN_KEY,
      type: "category",
      url: "https://www.amazon.com/s?bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A502394%2Cn%3A281052",
      category_id: "11057051"
    }

    axios.get('https://api.asindataapi.com/request', { params2 })
    .then(response => {
    
        // print the JSON response from ASIN Data API
        console.log(JSON.stringify(response.data, 0, 2));
    
      }).catch(error => {
    // catch and print the error
    console.log(error);
    })

module.exports = router;
