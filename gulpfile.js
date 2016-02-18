
var gulp = require('gulp');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');


gulp.task('sass', function() {

    gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('compile-react', function() {
	return gulp.src('mars-main.jsx')//keep same path as watch line 53
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(webpack({
		output: {
			filename: 'mars-main.js'
		},
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
	.pipe(gulp.dest('./'));
});


gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
		server: './'
	});
  gulp.watch(['./sass/**/*.scss'],['sass']);
	gulp.watch(['mars-main.jsx'], ['compile-react']);
	gulp.watch(['mars-main.js', 'index.html','./css/style.min.css']).on('change', browserSync.reload)
});

gulp.task('default', ['browser-sync']);
