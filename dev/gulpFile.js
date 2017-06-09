'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src('./styles/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./styles/'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('dev', ['sass'], function() {

    browserSync.init({
        server: "./",
        port: 8000
    });

    gulp.watch("styles/scss/**/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("scripts/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['dev']);
