// // //header模块
// define(["jquery",], function($) {
//     require(["require.config"], function(){
//         require(["template"], function (template) {
//             class Header {
//                 constructor () {
//                     this.init().then(() =>{
//                         this.cartNumModule ();
//                         this.homeModule ();
//                     });
//                 }
//                 init () {
//                     return new Promise((resolve, reject) => {
//                         //将写好的header的html放入头部div容器中
//                         $("#head-container").load("/html/module/header.html", function(){
//                             //回调函数，指的是load加载结束后执行的代码
//                             //console.log("aaa")
//                             resolve ();
//                         })
//                     })
//                 }
//                 //头部购物车数量显示
//                 cartNumModule () {
//                     let cart = JSON.parse(localStorage.getItem("cart"));
//                     var num = 0;
//                     for(var i = 0; i<cart.length; i++){
//                         num += Number(cart[i].num);
//                     }
//                    $("#cartnums").html(num)
//                 }
//                 //居家生活
//                 homeModule () {
//                     $.ajax({
//                         url : "http://rap2api.taobao.org/app/mock/164302/homelist",
//                         method : "GET",
//                         datatype : "JSON",
//                         success : function (res) {
//                             if(res.res_code === 1){
//                                 var homedata = res.res_body.data;
//                                 var html = template("homeId", {homedata})
//                                 $(".fix-width").html(html)
//                                 //console.log(html)
//                             }
//                         }
//                     })
//                 }
//             }
//             return new Header();
//         })
//     })
// });
define(["jquery",], function($) {
    class Header {
        constructor () {
            this.init().then(() =>{
                this.cartNumModule ();
            });
        }
        init () {
            return new Promise((resolve, reject) => {
                //将写好的header的html放入头部div容器中
                $("#head-container").load("/html/module/header.html", function(){
                    //回调函数，指的是load加载结束后执行的代码
                    //console.log("aaa")
                    resolve ();
                })
            })
        }
        //头部购物车数量显示
        cartNumModule () {
            let cart = JSON.parse(localStorage.getItem("cart"));
            var num = 0;
            for(var i = 0; i<cart.length; i++){
                num += Number(cart[i].num);
            }
           $("#cartnums").html(num)
        }
        //居家生活
        
    }
    return new Header();
})
