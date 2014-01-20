module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      files: ['assets/sass/*.scss'],
      tasks: 'sass:dev'
    },

    sass: {
      dev: {
        files: {
          '<%=pkg.name %>.css': 'assets/sass/<%=pkg.name %>.scss'
        }
      }
    },

    autoprefixer: {
      single_file: {
        src: '<%=pkg.name %>.css',
        dest: '<%=pkg.name %>.css'
      }
    },

    concat: {
      js: {
        src: ['assets/js/libs/*.js', 'assets/js/*.js'],
        dest: '<%=pkg.name %>.js'
      },
    }

  });
  grunt.registerTask('default', 'sass:dev')

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
}