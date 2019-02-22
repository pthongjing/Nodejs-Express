/*
 * Module dependencies
 */
var express = require('express')
 
var app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))

// res.render('file') คือการให้ทำการ render ไฟล์ ที่อยู่ในโฟลเดอร์ views
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

var server = app.listen(3000, function() {
  console.log('Express.js is running...');
});