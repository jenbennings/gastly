
var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    refresh = require('gulp-livereload');

// main tasks ------------------------------ //

gulp.task('styles', function () {
  gulp.src('assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(refresh());
});

// watch ----------------------------------- //

gulp.task('watch', function() {
  gulp.watch(['assets/sass/**/*.scss'], ['styles']);
});

// default task ---------------------------- //

gulp.task('default', ['styles','watch']);
