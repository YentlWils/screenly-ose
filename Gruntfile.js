module.exports = function(grunt) {

  // Load the required plugins
  /////////////////////////////////////////////////////////////////////////////

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer'); //only build changed files

  //Dynamically load all the Node package Tasks with Matchdep


  grunt.initConfig({

    // Set the package location
    /////////////////////////////////////////////////////////////////////////////

    pkg: grunt.file.readJSON('package.json'),

    // Configure the tasks
    /////////////////////////////////////////////////////////////////////////////

    // adds sass functionality
    sass: {
        online: {
            options: {
              //outputStyle: 'expanded',
              outputStyle: 'compressed',
              sourceComments: false,
              debugInfo: false,
              lineNumbers: false
            },
            files: [
                {
                    cwd:"static/sass",
                    expand: true,
                    src: ["**/*.scss","!**/_*.scss"],
                    dest: "static/css",
                    ext: ".css"
                }
            ]
        }
    },

    //css validate with csslint
    csslint: {
        online: {
          options: {
              csslintrc: '.csslintrc'
          },
          src: ['static/css/**/*.css']
        },
    },

    // Add all these actions to the watch
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'static/sass/**/*.scss',
        tasks: ['sass:online']
      }
    }
  });


  //tasks to be performed by default (for DEVELOPMENT)
  grunt.registerTask('default', [
    'sass:online',
    //'csslint:online',
  ]);

};
