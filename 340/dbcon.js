var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_langev',
  password        : '4401',
  database        : 'cs340_langev'
});

module.exports.pool = pool;