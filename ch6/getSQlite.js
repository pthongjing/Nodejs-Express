const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./Company.db');
 
var sql = `SELECT ID id,
                  INFO info
           FROM user
           WHERE id  = ?`;
var playlistId = 6;
 
// first row only
db.get(sql, [playlistId], (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row.id, row.info)
    : console.log(`No id found with the id ${id}`);
 
});
 
// close the database connection
db.close(function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  