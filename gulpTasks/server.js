const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
	watch('./app/**/*.html', () => gulp.start('app.html'))
	watch('./app/**/*.css', () => gulp.start('app.css'))
	watch(['./app/**/*.js', 'app.js'], () => gulp.start('app.js'))
	watch('./app/images/**/*.*', () => gulp.start('app.images'))
	watch(['./app/*.json', './app/*.appcache', './app/*.js'], () => gulp.start('app.manifest'))
	watch(['./packages/**/*.js', './node_modules/**/*.js', 'deps.js'], () => gulp.start(['deps.js', 'deps.persist']))
	watch(['./packages/**/*.css', './node_modules/**/*.css'], () => gulp.start(['deps.css', 'deps.fonts']))
})

gulp.task('devServer', ['watch'], () => {
	return gulp.src('public').pipe(webserver({
		livereload: true,
		port: 3006,
		open: true
	}))
})

gulp.task('qaServer', () => {

})

gulp.task('prodServer', () => {

})

gulp.task('modulesServer', ['watch'], () => {
	return gulp.src('public').pipe(webserver({
		directoryListing: {
			enable: true,
			path: 'public/modules/'
		},
		port: 3005,
		open: false
	}))
})
