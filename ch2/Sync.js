	var fs = require('fs');
	var data = fs.readFileSync('Data.txt');
console.log(data.toString());
console.log('Do other jobs');
