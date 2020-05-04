'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');



//compile scss into css
function style() {
    return gulp.src('./app/assets/scss/*.scss')
        // Compile SASS files
        .pipe(sass({outputStyle: 'compressed'}))
        // Output
        .pipe(gulp.dest('./app/assets/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('./app/assets/js/app.js', { allowEmpty: true })
        .pipe(minify({noSource: true}))
        .pipe(gulp.dest('./app/assets/js'))
        .pipe(browserSync.stream());
}



function watch() {
    browserSync.init({
        server: {
            baseDir: "./app",
            index: "/index.html"
        }
    });
    gulp.watch('./app/assets/scss/*.scss', style);
    gulp.watch('./app/assets/js/app.js', scripts);
    gulp.watch('./app/*.html').on('change',browserSync.reload);
    gulp.watch('./app/pages/*.html').on('change',browserSync.reload);
    gulp.watch('./app/assets/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.scripts = scripts;
exports.default = gulp.series(watch);

