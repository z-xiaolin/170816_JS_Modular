
(function () {
    //1. 配置模块
    require.config({ // 配置对象
        // 基本路径
        baseUrl:"src/",
        //映射: 模块标识名: 路径
        paths:{
            //自定义模块
            "module1":"modules/module1", // 不能加后缀
            "module2":"modules/module2",

            "jquery":"libs/jquery-1.10.1"
        }
    })

    // 加载模块运行
    require(["module2"],function (m2) {
        m2()
    })

})()