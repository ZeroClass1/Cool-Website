var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("It works.");
})

gulp.task('html', function(){
  console.log("Imagine something happens");
})


gulp.task('styles', function(){
  console.log("Post CSS");
})


gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
})
