const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const hub = new HubRegistry(['gulp_tasks/*.task.js']);

gulp.registry(hub);

gulp.task('serve', gulp.series('browsersync'));
gulp.task('serve:dist', gulp.series('browsersync:dist'));
