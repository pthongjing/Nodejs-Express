var express = require('express');
var parser = require('body-parser');

var app = express();
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
 
app.use(function(req,res,next){
    res.locals.userValue = null;
    next();
})
 
app.set('view engine','ejs');


app.get('/', function(req, res) {
    res.render('index');
});
 
app.get('/register',function(req,res){
    res.render('register',{
        topicHead : 'Student Form',
    });
    console.log('user accessing Home page');
});
app.post('/student/add',function(req,res){
    var student = {
        first : req.body.fname,
        last : req.body.lname
    }
    console.log(student);
    res.render('register',{
        userValue : student,
        topicHead : 'Student Form'
    });
    //res.json(student);
     
});
app.get('/about', function(req, res) {
    res.render('about');
});
app.listen(5000,function(){
    console.log('server running on port 5000');
})