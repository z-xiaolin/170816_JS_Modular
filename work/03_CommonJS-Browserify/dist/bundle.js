(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],3:[function(require,module,exports){
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
},{"./module1":4,"./module2":5,"./module3":6,"fs":1,"uniq":2}],4:[function(require,module,exports){
/*
*  TODO module.export 来暴露
* */
module.exports = {
    foo:function () {
        console.log("module1 foo()");
    }
}

},{}],5:[function(require,module,exports){
module.exports = function () {
    console.log("module2()");
}

},{}],6:[function(require,module,exports){
exports.foo = function () {
    console.log("module3 foo()");
}

var bar = function () {
    console.log("module3 bar()");
}
exports.bar = bar

},{}]},{},[3]);
