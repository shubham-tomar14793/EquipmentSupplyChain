var express = require('express');

var navigationList = require('./app/schemas/navigationListSchema');
var sliderData = require('./app/schemas/sliderDataSchema');
var adminPage = require('./app/navigationalRoutes/adminPageRoute');
var directContact = require('./app/navigationalRoutes/directContact');

var router = express.Router();

router.get('/',function(req,res){
	navigationList.find(function(err,navigationList){
		if(err){res.send(err);}
		console.log(navigationList);
		res.json(navigationList);
	});
});
router.get('/',function(req,res){
	sliderData.find(function(err,sliderData){
		if(err){res.send(err);}
		console.log(sliderData);
		res.json(sliderData);
	});
});
//adminPage(app);
//directContact(app);


module.exports = router;