exports.foo = function () {
    console.log("module3 foo()");
}

var bar = function () {
    console.log("module3 bar()");
}
exports.bar = bar
