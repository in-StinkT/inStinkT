const fetchPerfumeData = require('../controllers/api/productRoutes');
const {Product} = require('../models');



// const seedPerfumeData = async () =>{
//     let data = await fetchPerfumeData();
//     // Product.bulkCreate(data);
//     console.log(data);
// }


module.exports = seedPerfumeData;
