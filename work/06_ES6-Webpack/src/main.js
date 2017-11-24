/*
*  TODO 入口
* */
// 1.引入模块
// 引入 第三方模块
import $ from "jquery"  // 需要重新进行打包

// 自定义模块的引入 1  -- 一般暴露方式的引入
import {foo,bar} from "./module1"
import {arr} from "./module1"
import * as m1 from "./module1" // 同时引入所有的数据 m1 为对象

import {fun1,fun2,data_arr} from "./module2"  // 相当于解构赋值

// 自定义模块的引入 2 -- 默认暴露方式的引入
import m3 from "./module3"  // m3 为对象

// 2.使用模块
foo()
bar()
console.log(arr);

fun1()
fun2()
console.log(data_arr);
m3.setName("BOb")
console.log(m3.name);

console.log($);
$('body').css('background', 'blue')