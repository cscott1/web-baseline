const Gulp = require('gulp')
const Sass = require('gulp-sass')
const Cssnano = require('gulp-cssnano')
const Imagemin = require('gulp-imagemin');

Gulp.task('watch', function () {
  Gulp.watch('sass/**/*.scss', ['compile_css','optimise_jpgs'])
})

Gulp.task('compile_css', function () {
  return Gulp.src('/sass/**/*.scss')
    .pipe(Sass().on('error', Sass.logError))
    .pipe(Cssnano())
    .pipe(Gulp.dest('./public/assets/css'))
})

Gulp.task('optimise_jpgs', function() {
  return Gulp.src('images/*.jpg')
    .pipe(Imagemin({ progressive: true }))
    .pipe(Gulp.dest('images'));
});
