require(["require.config"], function () {
    require(["jquery", "header","url", "template", "footer","slides"], function ($, header, url, template) {
      class Index  {
        constructor () {
            this.carrousel();
        }
        //主体导航栏
        carrousel () {
            //请求数据
            $.ajax({
                url : url.baseUrl + "navlist",
                method : "GET",
                datatype : "json",
                success : function (res) {
                    //console.log(res);
                    if(res.res_code === 1){
                        let list = res.res_body.list;
                        //template 是模块引擎提供的方法，用它来渲染模板引擎
                        var html = template("carrouselList", {list});
                        $("#aidCarrouselr").html(html);
                    }
                }
            })
        }
      }
      return new Index();
    })
})
