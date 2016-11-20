var express = require('express'); // node middleware to provide the boiler plate code
var app = express();
var bodyParser = require('body-parser');
var html = require('ejs').renderFile;//specifies the view-format of the application
var path = require('path');// provides utilities for working with file and directory paths.
var router = require('./routes'); // handles the webpages when the url is changed

var mongoose = require('mongoose');// for the database connection

/* ############## the page view configuration ############### */
app.use(bodyParser.json());
app.set('view engine', 'ejs');// This function sets the view engine to be of type ejs("embedded javaScript")
app.use(express.static(__dirname+'/public'));


/* ############## the database configuration ############### */

var connectionUrl = require('./app/config/dbConfiguration');
mongoose.connect(connectionUrl.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console , 'connection error'));
db.once('open',function(){
	console.log('database connected successfully');
});

/* ############# creating the schema for the database ###### */
//router(app);
app.use('api/navList',router);
/* ############## the port configuration for the server ############### */
var server = app.listen(3000,function(request,response){
  var address = server.address().address;
  var post = server.address().port;
  console.log("server running at port 3000");
});
