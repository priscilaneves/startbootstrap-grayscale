module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
  		main: ["dist"]
	},
    htmlmin: {                                     // Task
	    dist: {                                    // Target
	      options: {                               // Target options
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                 // Dictionary of files
	        'index.html': 'dist/index.html',   // 'destination': 'source'
	      }
	    }
  	},
    compress: {
		  main: {
		    options: {
		      mode: 'gzip'
		    },
		    expand: true,
		    cwd: '.',
		    src: ['**/*','!**/node_modules/**','!LICENSE','!README.md','!Gruntfile.js'],
		    dest: 'dist/',
		    rename: function(dest, src) {
			            var out = dest + '/' + src + '.gz';
			            return out;
        			}
		  }
		
	},
	copy: {
	  main: {
	    files: [
	      // includes files within path and its sub-directories
	      {expand: true, src: ['**/*'], dest: 'dist/'}
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
