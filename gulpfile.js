var gulp = require('gulp'),
  sass = require('gulp-sass');

gulp.task('watch', function() {
  gulp.watch('./app/sass/**/*.scss', ['style']);
});

gulp.task('style', function() {
  gulp.src('./app/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
