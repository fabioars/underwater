const gulp = require('gulp');
const babel = require('gulp-babel');

const source = ['./src/*.js', '!gulpfile.js', '!webpack.*.js'];

gulp.task('build', () => {
    return gulp.src(source)
        .pipe(babel())
        .pipe(gulp.dest('./lib'));
});

gulp.task('watch', ['build'], () => {
    gulp.watch(source, ['build']);
});

gulp.task('default', ['watch']);
