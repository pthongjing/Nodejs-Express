var mysql = require('mysql');
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
//password: '',
database: 'app_database'
});
connection.connect(function(err) {
if (err) throw err;
console.log('Connected!');
var sql = 'INSERT INTO people(name, address) VALUES ?';
 var values = [
 ['Tavorn', 'Ubon city'],
 ['RdduckOK', 'Trat city'],
 ['Somsri', 'Nonthaburi city'],
 ['Somporn', 'Prachinburi'],
 ['Natharee', 'Chiangmai city']
 ];
 connection.query(sql, [values], function (err, result) {
 if (err) throw err;
 console.log('Total of records inserted: ' + result.affectedRows);
 var sql = 'SELECT * FROM people'
connection.query(sql, function(err, result){
 if (err) throw err
	 console.log(result[3])
 });
 });
});
