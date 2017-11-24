
// 有依赖的模块
define(["module1","jquery"],function (m1,$) {
    var name = "AMD-RequireJS"
    function showCube() {
        document.write("hello "+ name + " <br> 3的立方是："+m1.cube(3));
        $("body").css("background","lightblue")
    }
    return showCube
})