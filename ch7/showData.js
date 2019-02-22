var mysql = require('mysql')
	var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',   // ไม่มี password
	 database: 'app_database'
	})
 connection.connect(function(err) {
        if (err) throw err;
 var sql = 'SELECT * FROM people'
connection.query(sql, function(err, result){
 if (err) throw err
   //  console.log(result[3])
   console.log(result[3])  
})
 })

