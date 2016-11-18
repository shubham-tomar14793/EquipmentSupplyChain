module.exports = function(app){
	app.get('/forWholeSale',function(req,res){
		res.render('directContact');
	});
}