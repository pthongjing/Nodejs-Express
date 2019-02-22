var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('Company.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
 
db.serialize(function () {
db.run('CREATE TABLE user (id INT, info TEXT)')
var stmt = db.prepare('INSERT INTO user VALUES (?,?)');
for (var i = 0; i < 10; i++) {
var d = new Date();
var n = d.toLocaleTimeString();
stmt.run(i, n)
}
stmt.finalize();
db.each('SELECT rowid AS id, info FROM user', function (_err, row) {
 console.log("User.id : " + row.id ,row.info)
  })
})
db.close(function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  