//function isObject (obj) {
//  return Object.prototype.toString.call(obj) === '[object Object]';
//}
//
//function isArray (obj) {
//  return Object.prototype.toString.call(obj) === '[object Array]';
//}
//
//function isNull (obj) {
//  return Object.prototype.toString.call(obj) === '[object Null]';
//}
//
////function isNaN (obj) {
////  return
////}
//

var global = 'global';

helloworld();

function helloworld () {
  console.log(local);
  console.log(global);
  var local = 'local';
}

//console.log(global);
//console.log(local);

// 预编译的时候, 所有的JS代码并没有被执行.
// 1. 找到所有的变量声明, 预先帮你把变量声明好. 之后变量就保存在作用域内
// 2. 找到所有的函数声明, 预先帮你把函数声明好, 再把函数保存在作用域内

// 预编译 --> 执行代码