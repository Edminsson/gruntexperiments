module.exports = function(grunt) {
	grunt.initConfig({
		typescript: {
			base: {
			  src: ['src/*.ts'],
			  dest: 'build',
			  options: {
				module: 'amd', //or commonjs 
				target: 'es5', //or es3 
				//basePath: 'src', //deprecated?
				sourceMap: true,
				declaration: true
			  }
			}
		},
		hash_require: {
				options: {
					//mapping: 'assets/assets.json',
					srcBasePath: 'src',
					destBasePath: 'dist',
					flatten: true,
					prepend: true,
					clean: true
				},
				require_js: {
					configPath: 'src/main.js', 
					dest: 'hashed_dist'
				}
				// ,
				// css: {
					// src: ['assets/build/**/*.css'],  //all your css that needs a hash appended to it 
					// dest: 'assets/build' //where the new files will be created 
				// } 
		},		  
		requirejs: {
		  compile: {
			options: {
			  baseUrl: "build/",
			  mainConfigFile: "build/main.js",
			  name: "main",
			  out: "dist/main.min.js"
			}
		  }
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-requirejs');	
	grunt.loadNpmTasks('grunt-hash-required');
	grunt.loadNpmTasks('grunt-typescript');		  

	grunt.task.registerTask('req',['requirejs']);
	grunt.task.registerTask('hreq',['hash_require']);
	grunt.task.registerTask('ts',['typescript']);

	grunt.task.registerTask('skriv','',function(){ grunt.log.writeln('Skriver lite...')});
	
};
