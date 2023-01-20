const scentValues = require('./scentAPIValues');
const Scent = require('../models/Scent');

//function for seeding the Scent table
const seedScents = async () =>{
    let DBarray = [];
    scentValues.forEach((scent)=>{
        let DBobj = {
            name: scent.name,
        }
        DBarray.push(DBobj);
    })
    await Scent.bulkCreate(DBarray);
}

module.exports = seedScents;