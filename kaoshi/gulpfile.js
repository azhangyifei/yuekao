var gulp=require("gulp");
var connect=require("gulp-connect");
var less=require("gulp-less");

gulp.task("webserver",function(){
	connect.server({
		root:"src",
        port: 8080,
        livereload: true
	});
});

gulp.task("less",function(){
	gulp.src("src/less/style.less")
	.pipe(less())
	.pipe(gulp.dest("src/css"))
	.pipe(connect.reload());
})
gulp.task("watch",function(){
	gulp.watch("src/less/*.less",["less"]);
})

gulp.task("default",['less','webserver','watch']);

