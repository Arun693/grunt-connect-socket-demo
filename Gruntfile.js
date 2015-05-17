module.exports = function (grunt) {

	grunt.initConfig({
		connect:{
			server:{
				options:{
					port:8000,
					hostname:'127.0.0.1',
					onCreateServer:function (server,connect,options) {
						require('./socket-code')(server);
					},
					keepalive:true,
					base:'public'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default',['connect']);

};