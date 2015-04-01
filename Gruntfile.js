module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
  		main: ["dist"]
	},
    htmlmin: {                                // Task
			dev: {
				options: {                          // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: '.',
					src: 'index.html',
					dest: 'dist'
				}]
			}
  	},
    compress: {
		  main: {
		    options: {
		      mode: 'gzip'
		    },
		    expand: true,
		    cwd: '.',
		    src: ['**/*','!**/node_modules/**','!**/dist/**','!LICENSE','!README.md','!Gruntfile.js','!index.html','dist/index.html'],
		    dest: 'dist/'//,
		    //rename: function(dest, src) {
			 //          var out = dest + '/' + src + '.gz';
			 //          return out;
        		//}
		  }//,
		//index: {
		//	options: {
		//		mode: 'gzip'
		//	},
		//	expand: true,
		//	cwd: '.',
		//	src: ['dist/index.html'],
		//	dest: '.'//,
		//	//rename: function(dest, src) {
		//	//          var out = dest + '/' + src + '.gz';
		//	//          return out;
		//	//}
		//}

		
	},
	copy: {
	  main: {
	    files: [
	      // includes files within path and its sub-directories
	      {expand: true, src: ['**/*','!**/dist/**','!**/node_modules/**'], dest: 'dist/'}
	    ]
	  }
	}
	
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  

  // Default task(s).
  grunt.registerTask('default', ['clean','copy','htmlmin','compress']);

};
