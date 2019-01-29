const gulp = require('gulp');
const conventionalChangelog = require('gulp-conventional-changelog');
const fs = require('fs');

gulp.task('changelog', function () {
    return gulp.src('CHANGELOG.md', {
        read: false
    })
      .pipe(conventionalChangelog({
        preset: 'angular',
        releaseCOunt: 0
      }))
      .pipe(gulp.dest('./'));
  });