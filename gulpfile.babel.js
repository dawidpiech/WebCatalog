import gulp from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import clean from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify-es';
let browserSync = require('browser-sync').create();

gulp.task('default', ['build']);

//Minify and concat js file
gulp.task('js', ()=>{
  gulp.src('./app/js/*.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

//compile sass file
gulp.task('sass', ()=>{
  gulp.src('./app/sass/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(clean())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Copy static files
gulp.task('static', () => {
  gulp.src('app/**/*.html').pipe(gulp.dest('dist'))
  gulp.src('app/assets/**/*.*').pipe(gulp.dest('dist/assets'))
  .pipe(browserSync.reload({
    stream: true
  }))
});


//Clear dist folder
gulp.task('clean', () => {
  return del.sync('dist');
});

gulp.task('build', ['clean'], ()=>{
  gulp.start(['static', 'sass', 'js']);
});

gulp.task('browserSync', function() {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
});

gulp.task('watch', ['default', 'browserSync'], () =>{
  gulp.watch('./app/sass/*.scss', ['sass'], browserSync.reload);
  gulp.watch('./app/js/**/*.js', ['js'], browserSync.reload);
  gulp.watch('./app/**/*.html', ['static'], browserSync.reload)
})

