var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglifycss = require('gulp-uglifycss');
var pipeline = require('readable-stream').pipeline;
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./assets/scss/module.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('module.css'))
        .pipe(autoprefixer ())
        .pipe(uglifycss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));

});