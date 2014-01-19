module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: ['assets/sass/*.scss'],
      tasks: 'sass:dev'
    },

    sass: {
      dev: {
        files: {
          'assets/css/styles.css': 'assets/sass/styles.scss'
        }
      }
    }
  });
  grunt.registerTask('default', 'sass:dev')

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
}