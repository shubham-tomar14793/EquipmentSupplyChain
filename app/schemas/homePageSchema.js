var mongoose = require('mongoose');

var navigationListSchema = mongoose.Schema(
		{
			navigationTitle : {type : String,required : true},
			pageLink : {type : String,required : true}
		},
		{
			timeStamps : true
		}
	);

var navigationList = mongoose.model('navigationList', navigationListSchema);

module.exports = navigationList;