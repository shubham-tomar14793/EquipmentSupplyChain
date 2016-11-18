var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var html = require('ejs').renderFile;
var path = require('path');
var router = require('./routes');

app.use(bodyParser.json());
app.set('views/',path.join(__dirname,'/views'));
app.use(express.static('public'));

app.set('view engine', 'ejs');// This function sets the view engine to be of type ejs("embedded javaScript")

router(app);

var server = app.listen(3000,function(request,response){
  var address = server.address().address;
  var post = server.address().port;
  console.log("server running at port 3000");
});
