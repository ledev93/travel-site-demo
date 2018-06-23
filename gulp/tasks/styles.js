var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplevars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    cssimport = require('postcss-import'),
    mixins = require('postcss-mixins');
    
    
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, mixins, nestedcss, simplevars, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString())
            this.emit('end')
        })
        .pipe(gulp.dest('./app/temp/styles'))
})