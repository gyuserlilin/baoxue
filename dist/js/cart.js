"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}require(["require.config"],function(){require(["jquery","url","template","header","footer"],function(c,t,n,e){return new(function(){function t(){_classCallCheck(this,t),this.init(),this.n=0,this.delEcent(),this.tbodyDelEvent()}return _createClass(t,[{key:"init",value:function(){this.cart=JSON.parse(localStorage.getItem("cart")),this.shopCartBody(this.cart)}},{key:"shopCartBody",value:function(t){var e=n("tbody_xuan",{data:t});c("#tbody_box").html(e),this.numModule(),this.checkModule(),this.allPrice()}},{key:"numModule",value:function(){var t=this;c("#tbody_box").on("click",".plusBtn",function(){c(this).prev().val(Number(c(this).prev().val())+1);var n,r=c(this).prev().attr("dataId");t.cart.some(function(t,e){return n=e,t.id==r})&&(t.cart[n].num=c(this).prev().val(),localStorage.setItem("cart",JSON.stringify(t.cart)))}),c("#tbody_box").on("click",".minusBtn",function(){c(this).next().val(Number(c(this).next().val())-1);var n,r=c(this).next().attr("dataId");t.cart.some(function(t,e){return n=e,t.id==r})&&(t.cart[n].num=c(this).next().val(),localStorage.setItem("cart",JSON.stringify(t.cart)))})}},{key:"checkModule",value:function(){var e=this,n=Array.from(c("#tbody_box").find(".tbodyCheck"));n.forEach(function(t){c("#theadCheck").change(function(){t.checked=c("#theadCheck")[0].checked,e.n=c("#theadCheck")[0].checked?n.length:0,c("#tfootInt").html(e.n)})}),n.forEach(function(t){c(t).change(function(){e.n+=t.checked?1:-1,c("#theadCheck")[0].checked=e.n===n.length,c("#tfootInt").html(e.n)})})}},{key:"delEcent",value:function(){c("#deleteBtn").on("click",function(){Array.from(c("#tbody_box").find(".tbodyCheck")).forEach(function(t){t.checked&&c(t).parent().parent().remove()})})}},{key:"tbodyDelEvent",value:function(){c("#tbodyDelBtn").on("click",function(){var t=c(this).parent().parent();c("#okBtn").on("click",function(){t.remove(),c("#myModal").modal("hide")})})}},{key:"allPrice",value:function(){for(var t=Array.from(this.cart),e=0,n=0;n<t.length;n++)e+=Number(t[n].num)*Number(t[n][0].price);c(".priceOne").html(e)}}]),t}())})});