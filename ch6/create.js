	const sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('./db/sample.db', (err) => {
    if (err) {
     return console.error(err.message);
	    }
    console.log('Connected to the in-memory SQlite database.');
  });
	 db.run('CREATE TABLE langs(name text)');
	db.close(function (err) {
	    if (err) {
	      return console.error(err.message);
	    }
	    console.log('Close the database connection.');
  });
