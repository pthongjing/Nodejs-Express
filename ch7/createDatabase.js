var mysql = require('mysql');
	var connection = mysql.createConnection({
	 host: 'localhost',
	 user: 'root',
	 password: '',   // ไม่มี password
	});
	connection.connect(function(err) {
	    if (err) throw err;
	         console.log('You are now connected...' );
          connection.query('CREATE DATABASE company', function (err, result) {
	 if (err) throw err;
	      console.log('Database created');
	     })
	})