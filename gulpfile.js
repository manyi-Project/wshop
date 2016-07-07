/**
 * Created by pc on 2016/3/8.
 */

"use strict";

var gulp         = require('gulp');
var postcss      = require('postcss');
var gulp_postcss = require('gulp-postcss');
//var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();
//var autoprefixer = require('autoprefixer');
var Px2remObj    = require('px2rem');
var rename       = require('gulp-rename');
var csswring     = require('csswring');
var concat       = require('gulp-concat');
var cssimport    = require('postcss-import');
var vars         = require('postcss-simple-vars');
var nested       = require('postcss-nested');
var px2rem       = require("postcss-px2rem");

gulp.task('build:css', function(){
	var processors = [
		vars,
		cssimport,
		nested,
		//livereload,
		//autoprefixer,
		px2rem({ remUnit: 72 }),
		csswring({
			preserveHacks: true,
			removeAllComments: true
		})
	];
	return gulp.src(['css/src/*.css'])
		.pipe(concat('main.css')) 
		.pipe(gulp_postcss(processors))
		.on('error', errorHandler)
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream())
});

// Static server
gulp.task('browser-sync', function() {
	var files = [
		'pages/*.html',
		'css/src/*.css',
		'js/*.js'
	];
	browserSync.init(files,{
		server: {
			baseDir: "./"//定义从那个位置启动服务器
		},
		port: 7070
	});
});
gulp.task('watch', function () {
	gulp.watch([
		'css/src/*.css',
		'pages/*.html',
		'js/*.js'
	], ['build:css']);
});
gulp.task('default', ['watch','browser-sync']);
function errorHandler(error){
	this.emit('end');
}
