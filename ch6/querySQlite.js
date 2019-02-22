const sqlite3 = require('sqlite3').verbose();
 
// open the database
var db = new sqlite3.Database('Company.db');
 
var sql = `SELECT *FROM user`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.id + " " + row.info);
  });
});
 
// close the database connection
db.close(function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
 