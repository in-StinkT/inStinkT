const sequelize = require('../config/connection');
const {Product} = require('../models');

const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({force: true});
  
  const products = await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();