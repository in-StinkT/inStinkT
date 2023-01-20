const Scent = require('./Scent');
const Product = require('./Product');
const User = require('./User');


Product.belongsTo(Scent,{
    foreignKey: 'scent_id',
});
Scent.hasMany(Product,{
    foreignKey: 'scent_id',
});







module.exports = {Product, User, Scent}