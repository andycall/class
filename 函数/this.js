//function test () {
//  console.log(this);
//
//  setTimeout(function () {
//    console.log(this);
//  }, 10);
//
//  function f () {
//    console.log(this); // window
//  }
//
//  this.f = f;
//
//  this.f();
//}
//
//var obj = {
//  name: test
//}

function Box (name) {
  this.name = name;

  this.getName = function () {
    return this.name;
  }
}

function Container (name) {
  this.name = name;
}

//Box('hello');
var obj = new Box('world');
var obj2 = new Box('world');
var obj3 = new Box('world');
var obj4 = new Box('world');
var contain = new Container('world');

//test();

//obj.name();

// 在调用的时候来判断函数内部this, 就是是啥
// 诀窍: 除了对象调用函数的方式, 其他的所有情况(除了call和apply, 以及构造函数), 其他都是window

// call apply

function test (a, b, c) {
  console.log(this);
  console.log(a, b, c);
}

//test.call({name: 1}, 1, 2, 3);
test.apply(window, [1, 2, 3]);