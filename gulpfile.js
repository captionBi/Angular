var gulp =require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');

gulp.task('minify',function(){
    return gulp.src(['js/controllers/*.js','js/directives/*.js','js/filters/*.js','js/router/*.js','js/services/*.js'])
})