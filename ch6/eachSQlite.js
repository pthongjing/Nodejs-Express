const sqlite3 = require('sqlite3').verbose();
 
// open the database
var db = new sqlite3.Database('company.db');
 
let sql = `SELECT ID id,
                  INFO info
            FROM user
            WHERE id = ?
            ORDER BY info`;
 
db.each(sql, ['8'], (err, row) => {
  if (err) {
    throw err;
  }
  console.log(`${row.id} ${row.info}`);
});
 
// close the database connection
db.close();

