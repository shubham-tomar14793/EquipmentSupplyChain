module.exports = function(app){
	var adminPage = require('./navigationalRoutes/adminPageRoute');
	var directContact = require('./navigationalRoutes/directContact');
	app.get('/',function(req,res){
    	res.render('layout');
    });
    adminPage(app);
    directContact(app);
}