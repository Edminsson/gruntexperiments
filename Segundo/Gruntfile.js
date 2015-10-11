module.exports = function(grunt) {
	grunt.initConfig({
		requirejs: {
			ex: {
				options: {
				  baseUrl: "scripts/",
				  name: "main",
				  optimize: "none",
				  include: ['cuatro'],
				  out: "dist/ex.min.js"
				}
			},
			ex_mini: {
				options: {
				  mainConfigFile: "scripts/optconfig.js",
				}
			},
			ex_modul: {
				options: {
					appDir: "scripts",
					dir: "scripts-Build",
					baseUrl: ".",
					mainConfigFile: "scripts/main.js",
					//paths: {
					//	main: "../main"
					//},
					//keepBuildDir: false,
					modules: [{
						name: "main",
						include: [
							// These JS files will be on EVERY page in the main.js file
							// So they should be the files we will almost always need everywhere
							//"domReady",
							//"jquery",
							//"jqueryValidate",
							//"jqueryValidateUnobtrusive",
							//"bootstrap",
							//"moment"
						]
					}
					//,
					// These are page-specific bundles, usually named main-*
					//{ name: "main-currentDateTime", exclude: ["main"] }
					]
					//,
					//onBuildRead: function (moduleName, path, contents) {
					//	if (moduleName === "main") {
					//		return contents.replace("Scripts", "Scripts-Build");
					//	}
					//	return contents;
					//}
				}
			},
			ex_testbundle: {
				options: {
				  out: "my_modules/testbundle.js",
				  baseUrl: "scripts/",
				  name: "main",
				  //include: 'cuatro',
				  optimize: "none",
				  insertRequire: ["main"],
				  bundles: {
					'fyra' : ['cuatro']
				  }
				}
			},
			ex_prebundleprim: {
				options: {
				  baseUrl: "scripts/",
				  name: "main",
				  optimize: "none",
				  out: "my_modules/primary.js"
				}
			},
			ex_prebundlesec: {
				options: {
				  baseUrl: "scripts/",
				  include: 'cuatro',
				  out: "my_modules/secondary.js"
				}
			},
			ex_bundle: {
				options: {
				  baseUrl: "my_modules/",
				  name: "primary",
  				  bundles: {
				    'primary': ['main', 'one', 'two', 'three'],
					'secondary': ['cuatro']
				  },
				  optimize: "none",
				  out: "dist/bundle.min.js"
				}
			},
			ex_inkl: {
				options: {
				  baseUrl: "scripts/",
				  //mainConfigFile: "scripts/extraconfig.js",
				  paths: {
					requireLib: '../bower_components/requirejs/require'
				  },
				  name: "main",
				  optimize: "none",
				  include: ['cuatro', 'requireLib'],
				  out: "dist/ex.min.js"
				}
			}
		
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');	
	grunt.loadNpmTasks('grunt-typescript');		  

	grunt.task.registerTask('req',['requirejs']);
	grunt.task.registerTask('ts',['typescript']);
	
	grunt.task.registerTask('ex','',function() {
		grunt.task.run('requirejs:ex');
	});
	grunt.task.registerTask('ex_bundles','',function() {
		grunt.task.run('requirejs:ex_bundles');
	});
	grunt.task.registerTask('ex_mini','',function() {
		grunt.task.run('requirejs:ex_mini');
	});
	grunt.task.registerTask('ex_inkl','',function() {
		grunt.task.run('requirejs:ex_inkl');
	});

};
