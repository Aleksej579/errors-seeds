const { series, parallel } = require('gulp');
const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));


function html() {
    return (
        gulp
            .src("src/index.html")
            .pipe(gulp.dest("./dest"))
    );
}
function style() {
    return (
        gulp
            .src("src/sass/**/*.sass")
            .pipe(sass()
                .on("error", sass.logError))
            .pipe(gulp.dest("./dest"))
    );
}
function js() {
    return (
        gulp
            .src('src/js/*.js')
            .pipe(gulp.dest('./dest'))
    );
}
function watch() {
    gulp.watch('src/*.html', html)
    gulp.watch('src/sass/*.sass', style)
    gulp.watch('src/js/*.js', js)
}

exports.default = series(html, parallel(style, js), watch);