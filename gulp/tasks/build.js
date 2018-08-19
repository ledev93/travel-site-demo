var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    del = require('del'),
    usemin =require("gulp-usemin"),
    rev = require("gulp-rev"),
    cssnano = require("gulp-cssnano"),
    uglify = require("gulp-uglify");

gulp.task('deleteDistFolder', function(){
    return del("./dist")
})

gulp.task('copyGeneralFiles', function(){
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**'
    ]
   return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./dist'))
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
    return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('usemin', ['deleteDistFolder'], function(){
   return gulp.src('./app/index.html') 
    .pipe(usemin({
        css: [function() {return rev()}, function() {return cssnano()}],
        js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);