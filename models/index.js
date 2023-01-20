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

Favorite.belongsToMany(User, {
    foreignKey: 'favorite_id',
    through: 'favorite',
});

Product.belongsToMany(Favorite, {
    foreignKey: 'product_id',
    through: 'favorite',
});

module.exports = {Product, User, Favorite}