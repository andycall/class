var myObject = {
  a: 2
};

Object.getOwnPropertyDescriptor(myObject, "a"); //{
// value: 2,
// writable: true,
// enumerable: true,
// congurable: true
// }


var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false, // 不可写!
  configurable: true,
  enumerable: true
});
myObject.a = 3;
myObject.a; // 2


"use strict";
var myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: false, // 不可写!
  configurable: true,
  enumerable: true
});
myObject.a = 3; // TypeError


var myObject = {
  a: 2
};
myObject.a = 3;
myObject.a; // 3

Object.defineProperty(myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, // 不可配置!
  enumerable: true
});

myObject.a; // 4
myObject.a = 5;
myObject.a; // 5

Object.defineProperty(myObject, "a", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true
}); // TypeError


var myObject = {
  a: 2
};
myObject.a; // 2
delete myObject.a;
myObject.a; // undefined
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true
});

myObject.a; // 2
delete myObject.a;
myObject.a; // 2


// 给一个变量设置不可写有时对于一个引用并没有用
myImmutableObject.foo; // [1,2,3]
myImmutableObject.foo.push(4);
myImmutableObject.foo; // [1,2,3,4]


// 对象常量
var myObject = {};
Object.defineProperty(myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
});


//禁止扩展
var myObject = {
  a: 2
};
Object.preventExtensions(myObject);
//Object.defineProperty(myObject, 'a', {
//  configurable: false
//})

myObject.b = 3;
myObject.b; // undefined

// 密封
// 阻止新的属性被添加, 同时所有的属性不可配置. 当前所有属性的值都能被改变因为是可写的
Object.seal(myObject)

// 冻结一个对象: 阻止一个属性被添加 , 阻止一个现有属性被删除. 阻止现有的可写,可配置,可枚举等配置被修改. 所以这个对象被完全不可配置.
Object.freeze(myObject)

// Geter Setter

var myObject = {
// 给 a 定义一个 getter
  get a () {
    return 2;
  }
};
Object.defineProperty(myObject, // 目标对象
  "b", // 属性名
  { //描述符
    // 给 b 设置一个 getter
    get: function () {
      return this.a * 2
    },
    // 确保 b 会出现在对象的属性列表中
    enumerable: true
  }
);
myObject.a; // 2
myObject.b; // 4

var myObject = {
// 给 a 定义一个 getter
  get a () {
    return 2;
  }
};
myObject.a = 3;
myObject.a; // 2


var myObject = {
  // 给 a 定义一个 getter
  get a () {
    return this.___a_;
  },
  // 给 a 定义一个 setter
  set a (val) {
    this.___a_ = val * 2;
  }
};

myObject.a
myObject.a = 2;
myObject.a; // 4

var myObject = {
  a: 2
};

// 会查找原型
("a" in myObject); // true
("b" in myObject); // false
// 不会查找原型
myObject.hasOwnProperty("a"); // true
myObject.hasOwnProperty("b"); // false


var myObject = {};
Object.defineProperty(
  myObject,
  "a",
  // 让 a 像普通属性一样可以枚举
  {enumerable: true, value: 2}
);
Object.defineProperty(
  myObject,
  "b",
  //让b不可枚举
  {enumerable: false, value: 3}
);
myObject.b; // 3
("b" in myObject); // true
myObject.hasOwnProperty("b"); // true
// .......
for (var k in myObject) {
  console.log(k, myObject[k]);
} //"a"2

var myObject = {};
Object.defineProperty(
  myObject,
  "a",
// 让 a 像普通属性一样可以枚举
  {enumerable: true, value: 2}
);
Object.defineProperty(
  myObject,
  "b",
//让b不可枚举
  {enumerable: false, value: 3}
);
myObject.propertyIsEnumerable("a"); // true
myObject.propertyIsEnumerable("b"); // false
Object.keys(myObject); // ["a"]
Object.getOwnPropertyNames(myObject); // ["a", "b"]


// 原型

function Foo () { // ...
}
var a = new Foo();
Object.getPrototypeOf(a) === Foo.prototype; // true

function Foo () { // ...
}
Foo.prototype.constructor === Foo; // true
var a = new Foo();
a.constructor === Foo; // true


function Foo (name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};
var a = new Foo("a");
var b = new Foo("b");
a.myName(); // "a"
b.myName(); // "b"


function Foo (name) {
  this.name = name;
}
Foo.prototype.myName = function () {
  return this.name;
};
function Bar (name, label) {
  Foo.call(this, name);
  this.label = label;
}
// 我们创建了一个新的 Bar.prototype 对象并关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype);
// 注意!现在没有 Bar.prototype.constructor 了 // 如果你需要这个属性的话可能需要手动修复一下它
Bar.prototype.myLabel = function () {
  return this.label;
};
var a = new Bar("a", "obja");
a.myName(); // "a"
a.myLabel(); // "obj a"


function Foo () { // ...
}
Foo.prototype.blah = 123;
var a = new Foo();

a instanceof Foo; // true


function isRelatedTo (o1, o2) {
  function F () {
  }

  F.prototype = o2;
  return o1 instanceof F;
}
var a = {};
var b = Object.create(a);
isRelatedTo(b, a); // true