'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src('./src/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
});

gulp.task('scripts', function() {
  return gulp.src('./src/scripts/**/*.js')
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest('js/'));
});

gulp.task('dev', ['sass', 'scripts'], function() {
  gulp.watch('./src/scss/**/*.scss', ['sass'])
  gulp.watch('./src/scripts/**/*.js', ['scripts']);
});