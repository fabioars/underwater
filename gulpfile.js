const gulp = require('gulp');
const babel = require('gulp-babel');

const source = ['./*.js', '!gulpfile.js', '!webpack.*.js'];

gulp.task('build', () => {
    return gulp.src(source)
        .pipe(babel())
        .pipe(gulp.dest('./es5'));
});

gulp.task('watch', ['build'], () => {
    gulp.watch(source, ['build']);
});

gulp.task('default', ['watch']);
