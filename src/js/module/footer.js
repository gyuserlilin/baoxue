define(['jquery'], function($) {
    class Footer{
        constructor () {
            this.init();
        }
        init () {
            //将写好的footer的HTML放入footer的div容器中
            $("#footer-container").load("/html/module/footer.html", function () {

            })
        }
    }
    return new Footer();
});