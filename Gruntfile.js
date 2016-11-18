module.exports = function(grunt){

	grunt.initConfig({
		less:{
			development : {
				options : {
					paths : ['public/css']
				},
				files : {
					'public/css/index.css':'public/css/myStyling.less'
				}
			}			
		}
	});
		
	grunt.loadNpmTasks('grunt-contrib-less');
	/*grunt.loadNpmTasks('grunt-express-server');*/
	grunt.registerTask('default',['less']);
	
}