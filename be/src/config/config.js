
require('dotenv').config();    // don't forget to require dotenv
const path = require('path');

if(process.env.DB_SERVICE_HOST) { 
  process.env.POSTGRES_SERVER=process.env.DB_SERVICE_HOST
  console.log('DATABASE_URL:'+process.env.DATABASE_URL); 
  console.print(process.env.DB_SERVICE_HOST);
  }


module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_SERVER,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_SERVER,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_SERVICE_HOST,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
