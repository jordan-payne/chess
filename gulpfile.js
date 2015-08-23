var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var paths = {
  distDev: './dist.dev',
  scripts: ['app/*.js',
            'app/!(bower_components)/*.js', 
            'app/!(bower_components)/**/*.js']
}

var pipes = {};

pipes.jshintAppScripts = function() {
  console.log(gulp.src)
  return gulp.src(paths.scripts)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish', {verbose: true}));
};

gulp.task('jshint-app-scripts', pipes.jshintAppScripts);
