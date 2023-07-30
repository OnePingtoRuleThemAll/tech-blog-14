const Sequelize = require('sequelize');
require('dotenv').config(); // import sensitive data from .env

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL) // jawsdb_url is for heroku
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {  // local
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
    },
}),

module.exports = sequelize;