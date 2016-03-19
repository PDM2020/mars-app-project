//npm packages
var gulp = require('gulp');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var historyApiFallback = require('connect-history-api-fallback');

//Paths
// var jsMain    = './src/**/*.jsx';
// var sassMain  = './src/_main.scss';
// var htmlMain  = './src/index.html';
// var basePath  = './src/';
// var buildPath = './build';
 var compPath  = './components/*.jsx';

gulp.task('sass', function() {

    gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('compile-react', function() {
	return gulp.src('mars-main.jsx')
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(webpack({
		output: {
			filename: 'mars-main.js'
		},
    debug: true,
    devtool:'inline-source-map',
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		}
	}))

	.pipe(gulp.dest('./build'));
});

gulp.task('copy-html',function(){
  gulp.src('./index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
		server: {
      baseDir:'./build',
      middleware:[historyApiFallback()]
    }
	});

  gulp.watch(['./sass/**/*.scss'],['sass']);
	gulp.watch(['mars-main.jsx',compPath], ['compile-react']);
	gulp.watch(['./build/mars-main.js', './build/index.html','./build/style.min.css']).on('change', browserSync.reload);
  gulp.watch(['./index.html'],['copy-html']);
});

gulp.task('default', ['browser-sync']);
