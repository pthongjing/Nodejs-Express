var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var cursor = dbo.collection('customers').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 
