const router = require('express').Router();

router.get('/', async (req, res) => {

});

const axios = require('axios');

// set up the request parameters
// const params = {
// api_key: process.env.RAINFOREST_KEY,
//   domain: "amazon.com",
//   type: "standard",
//   parent_id: "11056591"
// }
// console.log("hello");
// //Testing fetches
// // make the http GET request to Rainforest API
// axios.get('https://api.rainforestapi.com/categories', { params })
// .then(response => {
//     // print the JSON response from Rainforest API
//     console.log(JSON.stringify(response.data, 0, 2));

//   }).catch(error => {
// // catch and print the error
// console.log(error);
// })


// fetchPerfumeData();

module.exports =  router;

