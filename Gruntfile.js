/*global module:false*/
module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
	express:{
		all:{
			options:{
				port:3000,
				hostname:"localhost",
				bases:[__dirname],
				livereload:true
			}
		
		}
	},
	watch:{
		all:{
			files:'_SpecRunner.html',
			options:{
				livereload:true
			}
		}
	},
	open:{
		all:{
			path:'http://<%= express.all.options.hostname %>:<%= express.all.options.port%>/_SpecRunner.html',
		},
		custom:{
			path:function(){
				return 'http://<%= express.all.options.hostname %>:<%= express.all.options.port%>/'+grunt.option('file')+'.html';
			}	
		}
	},
	jasmine:{
		test:{
			src:'src/**/*.js',
			options:{
				vendor:[
					'bower_components/underscore/underscore.js',
					'bower_components/backbone/backbone.js',
					//'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
				],
				helpers:[
					//'helpers/*.js'
				],
				specs:'specs/*.spec.js',
				keepRunner:true,
			}
		},
	},
	jshint:{
		all:['Gruntfile.js','specs/**/*.js','helpers/**/*.js','src/**/*.js','lib/**/*.js']
	},

  });

  grunt.registerTask('server',[ 'express', 'open:all', 'watch' ]);
  grunt.registerTask('default',[ 'jshint', 'jasmine']);


};
