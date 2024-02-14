const Sequelize = require('sequelize');

const sequelize = new Sequelize('eshop_max', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize;

