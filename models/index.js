const Scent = require('./Scent');
const Product = require('./Product');
const User = require('./User');
const Favorite = require('./Favorite');

// Product.belongsTo(User, {
//     foreignKey: 'product_id',
//     onDelete: 'CASCADE',
// });

// User.hasMany(Product, {
//     foreignKey: 'product_id',
// });

// Favorite.belongsToMany(User, {
//     foreignKey: 'favorite_id',
//     through: 'favorite',
// });

// Product.belongsToMany(Favorite, {
//     foreignKey: 'product_id',
//     through: 'favorite',
// });
Favorite.belongsTo(User, {
    constraints: false,
})
User.hasMany(Favorite)
Favorite.belongsTo(User)
Product.belongsToMany(User,{
    through:'favorite'
})


Favorite.belongsToMany(Product,{
    through: 'favorite'
})
Product.belongsToMany(Favorite,{
    through: 'favorite'
})



Product.belongsTo(Scent,{
    foreignKey: 'scent_id',
});
Scent.hasMany(Product,{
    foreignKey: 'scent_id',
});




module.exports = {Product, User, Scent}
