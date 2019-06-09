const fs = require('fs');
const eslint = require('gulp-eslint');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const webpack = require('webpack');
const uglify = require('uglify-js');
const rimraf = require('rimraf');
const argv = require('yargs').argv;
const { parallel, series, watch, src, dest } = require('gulp');


const ENTRY             = './index.js';
const HEADER            = './lib/header.js';
const DIST              = __dirname + '/dist';
const TIMELINE_JS       = 'timeline.js';
const TIMELINE_MAP      = 'timeline.map';
const TIMELINE_MIN_JS   = 'timeline.min.js';
const TIMELINE_CSS      = 'timeline.css';
const TIMELINE_MIN_CSS  = 'timeline.min.css';
var TIMELINE_D_TS     = 'timeline.d.ts';

/**
 * Generate banner with today's date and correct version
 *
 * @returns {string} banner text
 */
function createBanner() {
  const today = gutil.date(new Date(), 'yyyy-mm-dd'); // today, formatted as yyyy-mm-dd
  const version = require('./package.json').version;

  return String(fs.readFileSync(HEADER))
      .replace('@@date', today)
      .replace('@@version', version);
}

const bannerPlugin = new webpack.BannerPlugin({
  banner: createBanner(),
  entryOnly: true,
  raw: true
});

const webpackModule = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true, // use cache to improve speed
        babelrc: true // use the .babelrc file
      }
    }
  ],

  // exclude requires of moment.js language files
  wrappedContextRegExp: /$^/
};

const webpackConfig = {
  entry: ["@babel/polyfill", ENTRY],
  output: {
    library: 'timeline',
    libraryTarget: 'umd',
    path: DIST,
    filename: TIMELINE_JS,
    sourcePrefix: '  '
  },
  module: webpackModule,
  plugins: [ bannerPlugin ],
  cache: true,

  // generate details sourcemaps of webpack modules
  devtool: 'source-map'

  //debug: true,
  //bail: true
};

const uglifyConfig = {
  outSourceMap: TIMELINE_MAP,
  output: {
    comments: /@license/
  }
};

// create a single instance of the compiler to allow caching
const compiler = webpack(webpackConfig);

/**
 * Callback for handling errors for a compiler run
 *
 * @param {object} err
 * @param {objects} stats
 */
function handleCompilerCallback (err, stats) {
  if (err) {
    gutil.log(err.toString());
  }

  if (stats && stats.compilation && stats.compilation.errors) {
    // output soft errors
    stats.compilation.errors.forEach(function (err) {
      gutil.log(err.toString());
    });

    if (err || stats.compilation.errors.length > 0) {
      gutil.beep(); // TODO: this does not work on my system
    }
  }
}

// clean the dist/img directory
function clean(cb) {
  rimraf(DIST + '/img', cb);
}

// bundle js
function bundleJs(cb) {
  // update the banner contents (has a date in it which should stay up to date)
  bannerPlugin.banner = createBanner();
  compiler.run(function (err, stats) {
    handleCompilerCallback(err, stats);
    cb();
  });
}

// bundle and minify css
function bundleCss() {
  return src('./lib/**/*.css')
      .pipe(concat(TIMELINE_CSS))
      .pipe(dest(DIST))
      // TODO: nicer to put minifying css in a separate task?
      .pipe(cleanCSS())
      .pipe(rename(TIMELINE_MIN_CSS))
        .pipe(dest(DIST));
}

// minify js
function minifyJs(cb) {
  const result = uglify.minify([DIST + '/' + TIMELINE_JS], uglifyConfig);
  
  // note: we add a newline '\n' to the end of the minified file to prevent
  //       any issues when concatenating the file downstream (the file ends
  //       with a comment).
  fs.writeFileSync(DIST + '/' + TIMELINE_MIN_JS, result.code + '\n');
  fs.writeFileSync(DIST + '/' + TIMELINE_MAP, result.map.replace(/"\.\/dist\//g, '"'));
  
  cb();
});

function typings() {
  return src('./index.d.ts')
      .pipe(rename(TIMELINE_D_TS))
      .pipe(dest(DIST));
});

gulp.task('bundle', ['bundle-js', 'bundle-css']);

// read command line arguments --bundle and --minify
var bundle = 'bundle' in argv;
var minify = 'minify' in argv;
var watchTasks = [];
if (bundle || minify) {
  // do bundling and/or minifying only when specified on the command line
  watchTasks = [];
  if (bundle) watchTasks.push('bundle');
  if (minify) watchTasks.push('minify');
}
else {
  // by default, do both bundling and minifying
  watchTasks = ['bundle', 'minify'];
}

// The watch task (to automatically rebuild when the source code changes)
function watchFiles() {
  const minify = 'minify' in argv; 
  if (minify) {
    watch('index.js',  series(bundleJs, minifyJs, bundleCss));
    watch('lib/**/*', series(bundleJs, minifyJs, bundleCss));
  } else {
    watch('index.js',  series(bundleJs, bundleCss));
    watch('lib/**/*', series(bundleJs, bundleCss));
  }
}


// linting task
function lint(cb) {
  return src(['lib/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

const bundle = series(
  clean,
  parallel(
    bundleCss,
    series(bundleJs, minifyJs)
  )
)

exports.clean = clean;
exports.build = bundle;
exports.watch = watchFiles;
exports.lint = lint;
exports.typing = typing;
exports.default = series(clean, lint, bundle, typings);
