const sequelize = require('../config/connection');
const createDBObj = require('./index');
const seedScents = require('./seedScents');

//function to seed entire database with scents and their corresponding products
const seedDatabase = async () => {
  await sequelize.sync({force: true});
  console.log("DATABASE SYNCED");
  await seedScents();
  await createDBObj();
  console.log("DATABASE SEEDED");

  process.exit(0);
};

seedDatabase();