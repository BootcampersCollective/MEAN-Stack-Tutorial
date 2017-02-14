var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('default', function(){
    gulp.src('./public/js/**/*')
	.pipe(concat('build.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public/js/build'))
})


gulp.task('watch', function() {
    gulp.watch('./public/js/**/*', ['default']);
});
