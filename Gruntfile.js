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
          'assets/css/<%=pkg.name %>.css': 'assets/sass/<%=pkg.name %>.scss'
        }
      }
    },

    autoprefixer: {
      single_file: {
        src: 'assets/css/<%=pkg.name %>.css',
        dest: 'assets/css/<%=pkg.name %>.css'
      }
    }

  });
  grunt.registerTask('default', 'sass:dev')

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
}