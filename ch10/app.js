var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
 
var path = __dirname + '/views/';
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});
 
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});
 
router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});
router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
 router.post("/showmessage",urlencodedParser,function(req,res){
  var response ={ Name:req.body.name,
      email:req.body.email,
      message:req.body.message
  }
  
  res.send('<H1>' + (JSON.stringify(response)) + '<H1>');
   
 });


 app.use("/",router);


 
app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});
 
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})