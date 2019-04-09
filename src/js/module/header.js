//header模块
define(["jquery"], function($) {
    class Header {
        constructor () {
            this.init();
        }
        init () {
            //将写好的header的html放入头部div容器中
            $("#head-container").load("/html/module/header.html", function(){
                //回调函数，指的是load加载结束后执行的代码
                //console.log(aaa)
            })
        }
    }
    return new Header();
});