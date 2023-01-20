const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Scent extends Model {}

Scent.init({
    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'scent',
    timestamps: false,
    underscored: true,
});


module.exports = Scent;