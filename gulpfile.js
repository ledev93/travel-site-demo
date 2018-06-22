var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplevars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested');
    
gulp.task('html', function(){
    console.log('HTML Saved')
})    

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([nestedcss, simplevars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'))
})
gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html')
    })
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles')
    })
    
})

