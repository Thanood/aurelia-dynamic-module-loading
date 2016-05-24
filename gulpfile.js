var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('copy-html', function() {
  return gulp.src(['src/**/*.html', 'src/**/*.css'])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'copy-html']);
