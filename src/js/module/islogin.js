require(["require.config"], function () {
    require(["jquery"], function ($) {
        class Cookie {
            constructor () {
                this.aLogin ();
                this.loginOut ();
            }
            //登录状态
            aLogin () {
                let coouser = sessionStorage.getItem("user");
                //console.log(coouser)
                if(coouser){
                    $("#login-list-a").css("display", "none");
                    $("#login-list-b").css("display", "inline-block");
                    $("#welcome").html(coouser)
                }
            }
            //退出状态
            loginOut () {
                $("#lifive").on("click", function () {
                    localStorage.removeItem("user");
                    $("#login-list-a").css("display", "inline-block");
                    $("#login-list-b").css("display", "none");
                })
            }
        }
        return new Cookie ();
    })
})