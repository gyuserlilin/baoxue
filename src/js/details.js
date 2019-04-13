require(["require.config"], function () {
    require(["jquery", "header", "url", "template", "footer"], function ($, header, url, template) {
        class Details {
            constructor () {
                this.numModule ();
                this.init ();
                this.clickImg ();
                this.addToCart ();
            }
            //获取id请求数据
            init () {
                let id = location.search.slice(4);
                $.ajax({
                    url : url.baseUrl + "details?id=" + id,
                    method : "GET",
                    datatype : "json",
                    success : (res) => {
                        if(res.res_code === 1){
                            this.detailsModule (res.res_body.data);
                            this.leftImgModule (res.res_body.data);
                            //保存当前数据
                            this.shop = res.res_body.data;
                            //由于rap2返回的id有一样，所以需要手动修改id
                            this.shop.id = id;
                            //console.log(this.shop.id)
                            //获取商品名称
                            var title = res.res_body.data[0].text.title;
                            $("#productName").html(title);
                        }
                    }
                })
            }
            //渲染左侧页面
            leftImgModule (data) {
                var html = template("leftImg", {data})
                $("#imageBox").html(html)
            }
            //渲染右侧页面
            detailsModule (data) {
                var html = template("descWrap", {data})
                $("#boxDesc").html(html)
            }
            //点击右侧图片切换
            clickImg () {
               $("#imageBox").on("click", "li", function () {
                    var b = $(this).children("img").attr("src")  
                    $("#leftOne").attr("src", b)
                    //$(this).attr("class", "we-li")
                    
               })
            }
            //数量加减
            numModule () {
                $("#plusBtn").on("click", () => {
                    $("#numText").val(Number($("#numText").val())+1)
                });
                $("#minusBtn").on("click", () => {
                    if(Number($("#numText").val()) === 0){
                        $("#numText").val(0)
                    }else{
                        $("#numText").val(Number($("#numText").val())-1)
                    }
                })
            }
            //加入购物车
            addToCart () {
                $("#shopBtn").on("click", () => {
                    //存之前先取
                    let cart = localStorage.getItem("cart");
                    if(cart) {
                        cart = JSON.parse(cart)
                        //购物车已经有数据,需要判断有没有当前数据
                        let index;  //存遍历下标
                        if(cart.some((item, i) => {
                            index = i;
                            return item.id == this.shop.id
                        })){
                            //成立当前num++，索引为index就是当前数据
                            cart[index].num++
                        }else{
                            //没有当前数据，需要添加数据
                            cart.push({...this.shop, num : 1})
                        }
                        localStorage.setItem("cart", JSON.stringify(cart))
                    }else{
                        //购物车没有数据
                        localStorage.setItem("cart", JSON.stringify([{...this.shop, num : 1}]))
                    }
                    //console.log(localStorage.getItem("cart"))
                })
            }
        }
        return new Details ();
    })
})