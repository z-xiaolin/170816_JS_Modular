/*
 定义 有依赖的模块
*/
define(function (require,exports,module) {
    var name = 'Tom'

    //引入依赖模块(同步)
    var b = require('./b')

    function showMsg() {
        document.write(`Hello ${name}, ${b.cube(3)}`)
    }

    // 暴露数据
    module.exports = showMsg

})