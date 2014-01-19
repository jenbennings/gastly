module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['assets/sass/*.scss'],
      tasks: 'sass:dev'
    },

    sass: {
      dev: {
        files: {
          'assets/css/<%=pkg.name %>.css': 'assets/sass/<%=pkg.name %>.scss'
        }
      }
    }
  });
  grunt.registerTask('default', 'sass:dev')

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
}