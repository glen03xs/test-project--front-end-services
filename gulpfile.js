'use strict';

var gulp    =   require('gulp'),
    sass    =   require('gulp-sass'),
    concat  =   require('gulp-concat'),
    uglify  =   require('gulp-uglify'),
    rename  =   require('gulp-rename');

//Compile Sass
gulp.task('compileSass',function(){
    return gulp.src('css/sass/*.scss')
        .pipe(sass({
            'outputStyle': 'compressed'
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css/'))
});


// Concatenates JS
gulp.task("concatScripts", function() {
    gulp.src([
        'js/jquery.js',
        'js/owl.carousel.js',
        'js/scripts.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js/'));
});

//Minify JS {
gulp.task("minifyScripts", function() {
    gulp.src("js/main.js")
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('js'));
});

//Run JS Contactenates and Minify
gulp.task("default", ["compileSass", "concatScripts", "minifyScripts" ], function() {
    
});

