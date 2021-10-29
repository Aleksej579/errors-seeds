const { series, parallel } = require('gulp');
const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const include = require('gulp-include');

function html() {
    return (
        gulp
            .src(["src/index.html", "src/_wrapperLogo.html", "src/_wrapperCatalog.html", "src/_autosearch.html"])
            .pipe(include())
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
function img() {
    return (
        gulp
            .src('src/img/*')
            .pipe(gulp.dest('./dest/img'))
    );
}
function watch() {
    gulp.watch('src/*.html', html)
    gulp.watch('src/sass/*.sass', style)
    gulp.watch('src/js/*.js', js)
    gulp.watch('src/img/*', img)
}

exports.default = series(html, parallel(style, js, img), watch);