var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util');

var destination = {
      fonts: 'assets/fonts/',
      javascripts: 'assets/javascripts/',
      stylesheets: 'assets/stylesheets/'
    },
    filename = {
      javascripts: 'joshadamboyd.js',
      stylesheets: 'joshadamboyd.css'
    },
    source = {
      fonts: [
        'node_modules/bootstrap-sass/assets/fonts/**/*',
      ],
      javascripts: [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        '_src/javascripts/application.js'
      ],
      stylesheets: [
        '_src/stylesheets/application.scss'
      ]
    },
    watch = {
      javascripts: '_src/javascripts/**/*.js',
      stylesheets: '_src/stylesheets/**/*.scss'
    };

gulp.task('build', function() {
  gulp.start('fonts', 'scripts', 'styles');
});

gulp.task('fonts', function() {
  gulp.src(source.fonts)
    .pipe(gulp.dest(destination.fonts))
    .on('error', util.log);
});

gulp.task('scripts', function() {
  return gulp.src(source.javascripts)
    .pipe(sourcemaps.init())
      .pipe(stripDebug())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(concat(filename.javascripts))
    .pipe(gulp.dest(destination.javascripts))
    .on('error', util.log);
});

gulp.task('styles', function() {
  return gulp.src(source.stylesheets)
    .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'compressed'
      }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer('last 2 versions', '> 5%'))
    .pipe(concat(filename.stylesheets))
    .pipe(gulp.dest(destination.stylesheets))
    .on('error', util.log);
});

gulp.task('watch', ['build'], function() {
  gulp.watch(watch.javascripts, ['scripts']);
  gulp.watch(watch.stylesheets, ['styles']);
});

gulp.task('default', ['build']);
