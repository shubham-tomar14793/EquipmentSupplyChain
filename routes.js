var express = require('express');

var navigationList = require('./app/schemas/homePageSchema');
var adminPage = require('./app/navigationalRoutes/adminPageRoute');
var directContact = require('./app/navigationalRoutes/directContact');
var router = express.Router();

router.get('/',function(req,res){
	navigationList.find(function(err,homePageContent){
		if(err){res.send(err);}
		console.log(homePageContent);
		res.json(homePageContent);
	});
});
//adminPage(app);
//directContact(app);


module.exports = router;