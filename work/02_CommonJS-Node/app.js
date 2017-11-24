// 引入模块
// 引入node中内置模块
var fs = require("fs")
// 引入第三方的模块
var uniq = require("uniq") // 去重并排序

// 引入自定义模块
var module1 = require("./modules/module1")
var module2 = require("./modules/module2")
var module3 = require("./modules/module3")
//使用模块
module1.foo()
module2()
module3.foo()
module3.bar()

fs.readFile("app.js",function (error,data) {
    console.log(data.toString());
})

console.log(uniq([1,4,2,5,2,4,7]));