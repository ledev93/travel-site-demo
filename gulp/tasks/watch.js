var gulp = require('gulp'),
    watch = require('gulp-watch');

    
gulp.task('watch', function(){

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
    
})

