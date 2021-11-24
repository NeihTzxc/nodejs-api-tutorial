const KNEX = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST,
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : process.env.MYSQL_DB,
      port : process.env.MYSQL_PORT
    },
    pool: { min: 0, max: 7 }
  });
  
  module.exports = KNEX
  