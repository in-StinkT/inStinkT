const Product = require('./Product');
const User = require('./User');
const Favorite = require('./Favorite');

Product.belongsTo(User, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
});

User.hasMany(Product, {
    foreignKey: 'product_id',
});

Product.belongsTo(Favorite, {
    foreignKey: 'product_id',
    through: 'Favorite',
});

module.exports = {Product, User, Favorite}