const gulp = require('gulp');
const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');

browserSync.use(spa());

gulp.task('browsersync', browserSyncServe);
gulp.task('browsersync:dist', browserSyncDist);

function browserSyncServe(done) {
  browserSync.init(function() {
    return {
      server: {
        baseDir: ['build', 'src']
      },
      open: true
    };
  });
  done();
}

function browserSyncDist(done) {
  browserSync.init(function() {
    return {
      server: {
        baseDir: ['build']
      },
      open: false
    };
  });
  done();
}

gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch('src/app/**/*', reloadBrowserSync);
  done();
}
