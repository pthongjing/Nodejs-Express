var fs = require('fs');
 fs.readFile('Data.txt',function(err,data){
 console.log(data.toString());
 });
 console.log('Do other jobs');
