// create the connection to database
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'rossetto',
    password: 'xzsawq21'

  });

  module.exports = connection;