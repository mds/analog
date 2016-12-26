var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var cssvariables = require('postcss-css-variables');
var cssnano = require('cssnano');
var atImport = require("postcss-import");
var customMedia = require("postcss-custom-media");
var include = require("gulp-include");
var pxtorem = require("postcss-pxtorem");
var autoprefixer = require('autoprefixer');
var reload = browserSync.reload;




// Publish Site —————————————————————————————————————

gulp.task('publish', ['build', 'styles']);


// Develop Site —————————————————————————————————————

gulp.task('dev', ['dev-build', 'serve', 'css']);



// Tasks ————————————————————————————————————————————


// Task for building Jekyll and watching for changes
gulp.task('dev-build', shell.task(['jekyll build --incremental --watch']));

// Task for serving site with Browsersync
gulp.task('serve', function () {
    browserSync.init({
        server: {
          baseDir: '_site/'
        },
        notify: false,
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        }
    });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.html').on('change', reload);
    gulp.watch('./css/main.css', ['css']);
});

// Task for processing CSS and instantly streaming changes to browser
gulp.task('css', function() {
  var processors = [
      atImport(),
      customMedia(),
      cssvariables(),
      autoprefixer({
        browsers: ['last 2 versions'],
        zindex: false
      }),
      pxtorem({
        propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', 'padding', 'margin'],
        mediaQuery: true,
      }),
      cssnano({
        zindex: false
      })
  ];
  gulp.src('./css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./_site/css/'))
    .pipe(browserSync.stream());
});

// Task for compiling css
gulp.task('styles', function() {
  var processors = [
    atImport(),
    customMedia(),
    cssvariables(),
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    pxtorem({
      propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing', 'width', 'height', 'padding', 'margin'],
      mediaQuery: true,
    }),
    cssnano(),
  ];
  gulp.src('./css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./_site/css/'));
});

// Task for building Jekyll
gulp.task('build', shell.task(['jekyll build']));
