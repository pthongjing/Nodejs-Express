var mysql = require('mysql')
	var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	// password: ' ',   // ไม่มี password
	 database: 'app_database'
	})
	connection.connect(function(err) {
	if (err) throw err
	     console.log('You are now connected...')
	    connection.query('CREATE TABLE people(id int AUTO_INCREMENT primary key, name varchar(255), age int, address text)', function(err, result) {
	if (err) throw err
	    connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
	if (err) throw err
	     connection.query('SELECT * FROM people', function(err, results) {
	if (err) throw err
	     console.log(results)
	                 })
          })
	    }) 
	})

