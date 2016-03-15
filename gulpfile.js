// Include gulp
var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');

var sassBuild = function () {
    gulp.src('assets/sass/**.scss')
        .pipe(sass({
            errLogToConsole: false,
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify(
        {
            message: 'SASS compiled.',
            onLast: true
        }
    ));
};

// Compile sass
gulp.task('sass', sassBuild);

// Watch Files For Changes
gulp.task('watch', ['sass'], function () {

    gutil.log(gutil.colors.bgGreen('Watching for changes, Ctrl+C to exit'));
    gutil.log(gutil.colors.yellow('Only listening for Sass changes in _sass/'));

    // Watch .scss files
    gulp.watch(['assets/sass/**/*.*'], ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass']);