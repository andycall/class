//var index = 0;

//function recursion () {
//  index++;
//
//  console.log(index);
//
//  if (index < 100) {
//    recursion();
//  }
//}

//recursion();
//recursion();
//recursion();
//recursion();
//recursion();
//recursion();
//recursion();
//recursion();

var index = 0;
var a = 333;

// 闭包和this

function f () {
  return function x () {

  }
}

// func1(func2(func3(func4())))
// 一个复杂的事情是可以分离成 N个简单事情. --> N个简单的函数

function master (f) {
  return function () {
  }
}

// 很重要的特性
// JS的垃圾回收

// 变量,对象,数组,函数

// free marco 手动回收内存

// 除了 C C++ , 其他的编程Java C# Object-c python js ....
// 垃圾回收器

var a = 123;

var b = a;

a = null;

//
var obj = {};

function test () {
  var test1 = [];
  test1.push(1);

  obj.test1 = test1;
}
test();


var test = {};

function f () {
  test.xxx = 123;
  f();
}

var f = test; // 外部引用

f();
// 如果一个函数内部的变量存在外部的引用, 这个函数以及内部定义的变量就不会被垃圾回收器所释放


function recursion () {
  var a = 222;

  return function (a) {
    console.log(a); // 444
  }
}

var f = recursion();

var obj = {
  func: f
}

f(); // window
obj.func(); // obj

function test (fn) {
  var a = 444;

  fn(a); //
}

//var xxx = obj.func;
//xxx();

test(obj.func); // window


function foo () {
  var obj = {
    b: 1
  }

  function f (a) {

    return function (b) {
      return a + b;
    }
  }

  function o (n) {
    var b = 2;

    return b + n;
  }

  return o.call(f(2)(3))
}

function fun (n) {
  console.log(n); //

  return {
    fun: function (m) {
      console.log(m);

      return this.fun(m + n)
    }
  };
}

fun(1).fun(2);

var obj = {
  f : function () {

  }
}

obj.f();

// A. 1 2
// B. 1 2 3
// C. 1 2 3 4 5 6 7 8 ..... error
