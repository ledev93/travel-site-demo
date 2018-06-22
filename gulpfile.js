var gulp = require('gulp'),
    watch = require('gulp-watch');
    
gulp.task('html', function(){
    console.log('HTML Saved')
})    

gulp.task('styles', function(){
    console.log('CSS Saved')
})
gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html')
    })
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
    
})

