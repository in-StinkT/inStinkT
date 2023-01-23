const sequelize = require('../config/connection');
const createDBObj = require('./index');
const seedScents = require('./seedScents');

//function to seed entire database with scents and their corresponding products
const seedDatabase = async () => {

  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
  await sequelize.sync({force: true})
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1")

  console.log("DATABASE SYNCED");
  await seedScents();
  await createDBObj();
  console.log("DATABASE SEEDED");

  process.exit(0);
};

seedDatabase();