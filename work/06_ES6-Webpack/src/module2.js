/*
*  TODO 一般暴露方式 ：多个数据一块暴露
* */
function fun1() {
    console.log("module2 fun1()");
}

function fun2() {
    console.log("module2 fun2()");
}

let data_arr = [2,4,"q",5,2]

// 暴露数据
export {
    fun1,
    fun2,
    data_arr
}
