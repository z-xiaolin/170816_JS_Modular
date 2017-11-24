/*
 定义没有依赖的模块
*/
define(function (require,exports,module) {
    function square(x) {
        return x * x
    }
    // 暴露数据 -- 一个数据
    exports.square = square

    function cube(x) {
        return x * x * x
    }
    // 暴露数据 -- 一个数据
    exports.cube = cube
})