const mysql = require('mysql');
const util = require('util');


const pool = mysql.createPool({
    connectionLimit: 50,
    host     : 'localhost',
    user     : 'root',
    password : 'tuando24101997',
    database : 'sportnew',

});

const mysql_query = util.promisify(pool.query).bind(pool);

module.exports = {
    load:(sql)=> mysql_query(sql),
}