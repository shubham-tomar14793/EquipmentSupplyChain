var mongoose = require('mongoose');

var sliderDataSchema = mongoose.Schema(
	{
		src : {type : String ,required : true}

	},
	{
		collection : 'sliderData'
	});

var sliderData = mongoose.model('sliderData',sliderDataSchema);
module.exports = sliderData;	