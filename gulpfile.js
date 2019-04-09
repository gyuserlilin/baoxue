const  gulp = require("gulp"); 
const htmlMin = require("gulp-htmlmin");
const minifycss = require("gulp-minify-css");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const connect = require("gulp-connect");

//压缩html
gulp.task("html", () => {
    gulp.src("src/**/*.html")
        .pipe(htmlMin({
            removeComments: true,//清除HTML注释
            removeComments: true,//清除HTML注释
            collapseWhitespace: true,//压缩HTML
            collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
            removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
            removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS 
        }))
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());

})

//压缩css和编译scss
gulp.task("css", () => {
    gulp.src("src/css/*.scss")
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
})

//将ES6转化为ES5然后再压缩
gulp.task("js", () => {
    gulp.src("src/js/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());

})

//移动libs文件
gulp.task("libs", () => {
    gulp.src("src/libs/**/*")
        .pipe(gulp.dest("dist/libs"))
        .pipe(connect.reload())
})

//移动images文件夹
gulp.task("img", () => {
    gulp.src("src/images/**/*")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
})

//创建服务器
gulp.task("server", () => {
    connect.server({
        port : 1901,    //端口号
        livereload : true,   //让服务器自动重启
        root : "dist"   //根路径
    })
})

//监听文件改变，并自动执行对应的任务
gulp.task("watch", () => {
    gulp.watch("src/**/*.html", ["html"]);
    gulp.watch("src/js/**/*.js", ["js"]);
    gulp.watch("src/css/**/*.scss", ["css"]);
    gulp.watch("src/images/**/*", ["img"]);
    
})

//默认执行的任务
gulp.task("default", ["html", "css", "js", "libs", "img", "server", "watch"]);



































