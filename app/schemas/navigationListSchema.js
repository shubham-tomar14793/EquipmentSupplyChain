var mongoose = require('mongoose');

var navigationListSchema = mongoose.Schema(
	{
		label : {type : String,required : true},
		icon :  {type : String,required : true},
		name :  {type : String,required : true},
		link:   {type : String,required : true}
		
	},
	{
		collection :'navigationList'
	});

var navigationList = mongoose.model('navigationList', navigationListSchema);

module.exports = navigationList;