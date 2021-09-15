'use strict';

var gulp = require('gulp');
const themeKit = require('@shopify/themekit');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('scss/global.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'))
    themeKit.command('watch', {
        allowLive: true,
        env: 'development'
    })
});
