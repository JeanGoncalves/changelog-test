const gulp = require('gulp');
const conventionalChangelog = require('gulp-conventional-changelog');
const fs = require('fs');

gulp.task('changelog', function () {
    return gulp.src('CHANGELOG.md', {
        buffer: false,
        read: false
    })
      .pipe(conventionalChangelog({
        preset: 'angular',
        releaseCount: 0
      }))
      .pipe(gulp.dest('./'));
  });