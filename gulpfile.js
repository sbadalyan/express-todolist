const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const webpack = require('gulp-webpack');
const named = require('vinyl-named');

gulp.task('default', [
  'frontend-styles', 'frontend-styles-watch',
  'frontend-scripts', 'frontend-scripts-watch'
]);

gulp.task('build', [
  'frontend-styles',
  'frontend-scripts'
]);


gulp.task('frontend-styles', () => {
  return gulp.src('frontend/src/styles/*.scss').pipe(sass()).pipe(gulp.dest('frontend/dist/styles'));
});

gulp.task('frontend-styles-watch', () => {
  return gulp.watch('frontend/src/styles/**/*.scss', ['frontend-styles']);
});

gulp.task('frontend-scripts', () => {
  return gulp.src('frontend/src/scripts/*.js').pipe(named()).pipe(webpack({
    output: {
      filename: '[name].js',
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  })).pipe(gulp.dest('frontend/dist/scripts'));
});

gulp.task('frontend-scripts-watch', () => {
  return gulp.watch('frontend/src/scripts/**/*.js', ['frontend-scripts']);
});

