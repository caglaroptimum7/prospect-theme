'use strict';
const { watch, series, parallel, src, dest, gulp } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');
const connect = require('gulp-connect'); // Runs a local webserver
const open = require('gulp-open'); // Opens a URL in a web browser
const exec = require('child_process').exec; // run command-line programs from gulp
const execSync = require('child_process').execSync; // command-line reports

// Launch Chrome web browser
// https://www.npmjs.com/package/gulp-open
function openBrowser(done) {
    var options = {
    uri: 'http://localhost:8080'
    };
    return src('./app')
    .pipe(open(options));
    done();
}

// Gulp plugin to run a webserver (with LiveReload)
// https://www.npmjs.com/package/gulp-connect
function server(done) {
    return connect.server({
    root: './app',
    port: 8080,
    debug: true,
    });
    done();
}

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

// Commit and push files to Git
function git(done) {
    return exec('git add . && git commit -m "netlify deploy" && git push');
    done();
}

// Watch for netlify deployment
function netlify(done) {
    return new Promise(function(resolve, reject) {
        console.log(execSync('netlify watch').toString());
        resolve();
    });
}

// Preview Deployment
function netlifyOpen(done) {
    return exec('netlify open:site');
    done();
}

function watchFiles() {
    watch('./app/assets/scss/*.scss', style);
    watch('./app/assets/js/app.js', scripts);
    watch('./app/*.html').on('change',browserSync.reload);
    watch('./app/pages/*.html').on('change',browserSync.reload);
    watch('./app/assets/js/*.js').on('change', browserSync.reload);
}


exports.deploy = series(git, netlify, netlifyOpen);

// Default Gulp command

exports.default = series(openBrowser, server, watchFiles);

