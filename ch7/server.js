var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
 // password: '',
  database: 'app_database'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  
    
    connection.query('CREATE DATABASE testdb', function (err, result) {
      if (err) throw err;
      console.log('Database created')
      })
     })