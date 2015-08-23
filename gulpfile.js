var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var es = require('event-stream');
var bowerFiles = require('main-bower-files');
var Q = require('q');
var del = require('del');

var paths = {
  distDev: './dist.dev',
  styles: 'app/*.css',
  scripts: ['app/*.js',
            'app/**/**/*.js'],
  static: ['app/index.html', 'app/**/*.html', 'app/**/directives/*.html']
};

var pipes = {};

pipes.jshintAppScripts = function() {
  return gulp.src(paths.scripts)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish', {verbose: true}));
};

pipes.builtVendorScriptsDev = function() {
  return gulp.src(bowerFiles())
    .pipe(gulp.dest('dist.dev/bower_components'));
};

pipes.builtAppScriptsDev = function() {
  return pipes.jshintAppScripts()
    .pipe(gulp.dest(paths.distDev));
};

pipes.builtAppStaticDev = function() {
  return gulp.src(paths.static)
    .pipe(gulp.dest(paths.distDev));
}

pipes.builtAppStylesDev = function() {
  return gulp.src(paths.styles)
    .pipe(gulp.dest(paths.distDev));
}

pipes.builtAppDev = function() {
  return es.merge(pipes.builtAppScriptsDev(),
                  pipes.builtVendorScriptsDev(),
                  pipes.builtAppStaticDev(),
                  pipes.builtAppStylesDev());
};

gulp.task('jshint-app-scripts', pipes.jshintAppScripts);

gulp.task('clean-dev', function() {
  var deferred = Q.defer();
  del(paths.distDev, function() {
    deferred.resolve();
  });
  return deferred.promise;
});

gulp.task('build-app-dev', ['clean-dev'], pipes.builtAppDev);
