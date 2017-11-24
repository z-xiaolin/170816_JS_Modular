// TODO  exports.xxx 来暴露  --- 返回的是对象
exports.foo = function () {
    console.log("module3 foo()");
}

var bar = function () {
    console.log("module3 bar()");
}
exports.bar = bar
