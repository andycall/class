var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
var imageminPngquant = require('imagemin-pngquant');

var gulp = require('./gulpfile')

gulp.task('default', function() {
  // place code for your default task here

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

});

gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "./"
  });

  gulp.watch("src/**.scss", ['sass']);
  gulp.watch("src/**.js", ['es6']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('image', function () {
  return  gulp.src('src/image/*.png')
    .pipe(imageminPngquant({quality: '100', speed: 1})())
    .pipe(gulp.dest('./images'));
});

gulp.task('es6', function () {
	return gulp.src('src/js/*.js')
	.pipe(babel())
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('src/**.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
})

gulp.task('xxx', function() {
  // place code for your default task here
  // 1. 2  3 4
  console.log('12345');
});