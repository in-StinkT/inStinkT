const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    name: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    price:{
      type:DataTypes.DECIMAL,
    },
    manufacturer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scent_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'scent',
        key: 'id',
      },
    },
     scent_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'scent',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
);

module.exports = Product;