const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const sourcemap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImg() {
    return gulp.src('./source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'))
}

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemap.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemap.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function dizOi(callback) {
    console.log('Oi');
    callback();
}

function dizTchau(callback) {
    console.log('Tchau');
    callback();
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJs));
    gulp.watch('./source/img/*', { ignoreInitial: false }, gulp.series(comprimeImg));
}
