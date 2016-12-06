var appLocation = "app/";
var gulp = require('gulp');
var react = require('gulp-react');
var webserver = require('gulp-webserver');

gulp.task('compile', function() {
    return gulp.src(appLocation + 'js/**/*')
        .pipe(react().on('error', function(error) {
            console.log(error.toString())
            this.emit('end')
        }))
        .pipe(gulp.dest(appLocation + 'lib'))
});

// Watch styles and scripts
gulp.task("watch", function() {
    // WATCH STYLES
    gulp.watch(appLocation + 'js/**/*', ["compile"]);
});

gulp.task("webserver", function() {
    gulp.src(appLocation)
        .pipe(webserver({
            livereload: {
                enable: true,
                port: 1400
            },
            port: 1337,
            directoryListing: false,
            open: true,
            host: "0.0.0.0",
            fallback: "index.html"
        }));
});

gulp.task("default", ["webserver", "watch"], function() {});
