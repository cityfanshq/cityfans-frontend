const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = './html/src/assets/js/**/*.js';
const cssPath = './html/src/assets/css/**/*.scss';
  
// function copyHtml() {
// 	return src('./html/src/*.html').pipe(gulp.dest('./html/app/'));
// }

function jsTask() {
	return src(jsPath)
	.pipe(concat('all.js'))
	.pipe(terser())
	.pipe(dest('./html/app/assets/js'));
}

function cssTask() {
	return src(cssPath)
	.pipe(concat('phoenix.css'))
	.pipe(postcss([autoprefixer(), cssnano()]))
	.pipe(dest('./html/app/assets/css'));
}

function watchTask() {
	watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
// exports.copyHtml = copyHtml;
exports.default = series(parallel(jsTask, cssTask),watchTask);