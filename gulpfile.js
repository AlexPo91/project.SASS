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
        .pipe(autoprefixer ())
        .pipe(uglifycss())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'));

});

gulp.task('watch', function () {
    return gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass',
    gulp.parallel('watch')
));
