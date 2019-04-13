require(["require.config"], function () {
    require(["jquery", "url", "template", "header", "footer"], function ($, url, template,header) {
        class shopCart {
            constructor () {
                this.init ();
                this.n = 0; //记录单选勾选个数
                this.delEcent ();
                this.tbodyDelEvent ();
            }
            init () {
                this.cart = JSON.parse(localStorage.getItem("cart"));
                this.shopCartBody (this.cart);
            }
            shopCartBody (cart) {
                var html = template("tbody_xuan", {data : cart});
                $("#tbody_box").html(html)
                this.numModule();
                this.checkModule ();
                this.allPrice ();
                this.minPrice ();
            }
            //数量加减
            numModule () {
                //+
                let _this = this;
                $("#tbody_box").on("click", ".plusBtn", function(){
                    $(this).prev().val(Number($(this).prev().val())+1);
                    //修改num+
                    let dataId = $(this).prev().attr("dataId"),
                        index;
                    //console.log(dataId)
                    if(_this.cart.some((item, i) => {
                        index = i;
                        return item.id == dataId
                    })){
                        _this.cart[index].num = $(this).prev().val()
                        localStorage.setItem("cart", JSON.stringify(_this.cart))
                    }
                    _this.minPrice();
                    _this.allPrice ();
                })
                //-
                $("#tbody_box").on("click", ".minusBtn", function(){
                    $(this).next().val(Number( $(this).next().val())-1);
                    //修改num--
                    let dataId = $(this).next().attr("dataId"),
                        index;
                    //console.log(dataId)
                    if(_this.cart.some((item, i) => {
                        index = i;
                        return item.id == dataId
                    })){
                        _this.cart[index].num = $(this).next().val()
                        localStorage.setItem("cart", JSON.stringify(_this.cart))
                    }
                    _this.minPrice();
                    _this.allPrice ();
                })
                
            }
            //全选与单选
            checkModule () {
                //全选是单选全选
                let arr = Array.from($("#tbody_box").find(".tbodyCheck"));
                arr.forEach(check => {
                    $("#theadCheck").change(() => {
                        check.checked = $("#theadCheck")[0].checked;
                        //修改n的值解决bug
                        this.n = $("#theadCheck")[0].checked ? arr.length : 0;
                        $("#tfootInt").html(this.n)
                    })
                });
                //单选全选
                arr.forEach(check => {
                    $(check).change(() => {
                        //选中加一，不选中减一
                        this.n += check.checked ? 1 : -1;
                        //单选全选后勾选全选
                        $("#theadCheck")[0].checked = this.n === arr.length;
                        $("#tfootInt").html(this.n)
                    })
                })
            }
            //tfoot删除事件
            delEcent () {
                $("#deleteBtn").on("click", () => {
                    let arr = Array.from($("#tbody_box").find(".tbodyCheck"));
                    arr.forEach(item =>{
                        if(item.checked){
                            let tr = $(item).parent().parent();
                            tr.remove();
                            //删除localstroage的数据
                            var id = $(item).parent().parent().attr("aId")
                            this.cart.some((par, i) => {
                                if(id == par.id){
                                   this.cart.splice(i, 1)
                                   localStorage.setItem("cart", JSON.stringify(this.cart))
                                   console.log(this.cart)
                                }
                            })
                        }
                    })
                })
            }
            //tbody删除事件
            tbodyDelEvent () {
                var _this = this;
                $(".tbodyDelBtn").on("click", function () {
                    let tr = $(this).parent().parent();
                    $("#okBtn").on("click", () => {
                        tr.remove()
                        //$('#myModal').modal('hide')
                        //删除localstroage的数据btn btn-danger btn-sm
                        var id = $(this).parent().parent().attr("aId")
                        _this.cart.some((par, i) => {
                            if(id == par.id){
                               _this.cart.splice(i, 1)
                               localStorage.setItem("cart", JSON.stringify(_this.cart))
                            }
                        })
                    })
                })
            }
            //小计
            minPrice () {
                var num = $(".numText").val() * $(".isprice").html();
                $(".subtotal").html(num)
                console.log(num)
            }
            //计算总价
            allPrice () {
                var arr = Array.from(this.cart),
                    pricenum = 0;
                for (var i = 0; i < arr.length; i++) {
                    pricenum+= Number(arr[i].num) * Number(arr[i][0].price);
                }
                $(".priceOne").html(pricenum)
            }
        }
        return new shopCart();
    })
})