	const sqlite3 = require('sqlite3').verbose();
	 // open a database connection
	let db = new sqlite3.Database('./db/sample.db', (err) => {
	  if (err) {
	    console.error(err.message);
	  }
	});
	var id = 1;
	// delete a row based on id
	db.run(`DELETE FROM langs WHERE rowid=?`, id, function(err) {
	  if (err) {
	    return console.error(err.message);
	  }
	  console.log(`Row(s) deleted ${this.changes}`);
	});
	 // close the database connection
	db.close((err) => {
	  if (err) {
	    return console.error(err.message);
	  }
	});
