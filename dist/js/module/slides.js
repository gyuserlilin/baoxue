"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}define(["jquery"],function(i){return new(function(){function e(){_classCallCheck(this,e),this.init(),this.slides(),this.goNext(),this.goPrev(),this.buttonEvent(),this.bootUp(),this.enterEvent(),this.leaveEvent()}return _createClass(e,[{key:"init",value:function(){this.$slides_container=i(".slides-container"),this.$ul=this.$slides_container.children("ul"),this.$imgs=this.$ul.children(),this.$ol=this.$slides_container.children(".ol-list"),this.$imgwidth=this.$imgs.eq(0).width(),this.$len=this.$imgs.length,this.index=0,this.btn=[],this.flag=!1,this.timer=""}},{key:"slides",value:function(){this.$imgs.eq(0).clone().appendTo(this.$ul),this.$ul.css({width:this.$imgwidth*(this.$len+1)});for(var e=0;e<this.$len;e++)this.btn.push(i("<li>").addClass(0===e?"ac":"").appendTo(this.$ol))}},{key:"goNext",value:function(){var e=this;e.flag||i("#goNext").on("click",function(){++e.index>=e.$len?(e.index=0,e.flag=!0,e.$ul.animate({left:-e.$len*e.$imgwidth},function(){e.$ul.css("left",0),e.flag=!1})):e.$ul.animate({left:-e.index*e.$imgwidth},function(){e.flag=!1}),e.btn[e.index].addClass("ac").siblings().removeClass("ac")})}},{key:"goPrev",value:function(){var e=this;this.flag||(this.flag=!0,i("#goPrev").on("click",function(){--e.index<0&&(e.$ul.css({left:-e.$len*e.$imgwidth}),e.index=e.$len-1),e.$ul.animate({left:-e.index*e.$imgwidth},function(){e.flag=!1}),e.btn[e.index].addClass("ac").siblings().removeClass("ac")}))}},{key:"buttonEvent",value:function(){var t=this;t.btn.forEach(function(e,i){e.on("click",function(){t.index=i,t.$ul.animate({left:-t.index*t.$imgwidth}),t.btn[t.index].addClass("ac").siblings().removeClass("ac")})})}},{key:"bootUp",value:function(){this.timer=setInterval(function(){i("#goNext").trigger("click")},2e3)}},{key:"enterEvent",value:function(){var e=this;this.$slides_container.on("mouseenter",function(){clearInterval(e.timer)})}},{key:"leaveEvent",value:function(){this.$slides_container.on("mouseleave",function(){})}}]),e}())});