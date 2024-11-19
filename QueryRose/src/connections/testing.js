
    const mysql = require('mysql2/promise');
    const connectionJson = require('./testing.json');

    const pool = mysql.createPool(connectionJson);
    
    module.exports = pool