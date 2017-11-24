// 引入模块

// 引入第三方的模块
var uniq = require("uniq") // 去重并排序

// 引入自定义模块
var module1 = require("./module1")
var module2 = require("./module2")
var module3 = require("./module3")
//使用模块
module1.foo()
module2()
module3.foo()
module3.bar()


console.log(uniq([1,4,2,5,2,4,7]));