const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Car extends Model {};

Car.init({
  brand: {
    type: DataTypes.STRING
  },
  model: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  color: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'car'
})

module.exports = Car;
