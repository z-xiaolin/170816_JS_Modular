/*
* TODO 暴露方式一 ： 一般暴露方式 -- 分别暴露数据
* */
// 第一种形式 -- 暴露函数
export function foo() {
    var data = "Hello ES6-Webpack"
    console.log("module1 foo()",data);
}

// 第二种形式 -- 暴露函数
export const bar = function () {
    console.log("module1 bar()");
}

// 第三种形式 -- 暴露 数组
export let arr = [1,4,"a",6,3]