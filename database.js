const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbmodelcars', 'user', 'pass', {
  dialect: 'sqlite',
  host: './dev.sqlite'
})

module.exports = sequelize;