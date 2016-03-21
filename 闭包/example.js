// this的指向是在代码运行时来确定的.
// obj.func -> this == obj
// func () -> this === window
// func.call(xxx) -> this === xxx

// 闭包入门

// 闭包是用来确定函数内部
// 一个变量是否能被访问

// 这个变量能还是不能. 是在这个作用域还是不在.

// xxx被一个函数给闭包了. --> 一个变量是xxx, 它在这个函数的内部.在这个函数内部可以被访问到, 但是在函数外部就不能被访问.

// 闭包是一个动词, 一个变量xxx被嵌入到一个作用域内, 而且无法被改变(作用域的关系).

// 作用域之前的确定是在代码预编译阶段,

// 只有不使用 with 这个变量.

function foo () {
  var local = 123;
  var that = this; // this === window

  return function () {
    console.log('local', local) // 内部变量是不会变的
    console.log('local', this) // 只有this才会各种变
    console.log(that); //
    console.log(this === that);
  }
}

var outerFoo = foo();

var obj = {
  outer: outerFoo
};

var xxx = obj.outer;

xxx();

outerFoo(); // 123


obj.outer();