function F (name) {
	this.name = name
}

var f = new F('1234');


function foo () {
	console.log(this.a); // obj2.a => 42
}
var obj2 = {
	a: 42,
	foo: foo
};
var obj1 = {
	a: 2,
	obj2: obj2
};

var a = 4444;

//setTimeout(function () {
//	console.log(this) // window
//})

obj1.obj2.foo(); // 42
foo(); // 4444
obj2.foo(); // 42

function foo () {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo; // 函数别名!
var a = "oops, global"; // a 是全局对象的属性

obj.foo(); // 2
bar(); // oops global


function foo () {
	console.log(this.a); // this -> window
}

function doFoo (fn) {
	// fn 其实引用的是 foo
	fn(); // <-- 调用位置!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // a 是全局对象的属性

obj.foo(); // 2

doFoo(obj.foo);

function foo () {
	console.log(this.a); // this -> window
}
var obj = {
	a: 2,
	foo: foo
};
var a = "oops, global"; // a 是全局对象的属性

setTimeout(obj.foo, 100); //

//var xx = obj.foo;
//
////100s
//
//xx();


// 硬绑定

function foo () {
	console.log(this.a);
}
var obj = {
	a: 2
};
var bar = function () {
	console.log(this); // this -> window
	foo.call(obj);
};

bar(); // 2


setTimeout(bar, 100); // 2
// 硬绑定的 bar 不可能再修改它的 this

bar.call(window); // 2


function foo (something) {
	console.log(this.a, something);
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function () {
	return foo.apply(obj, arguments); // [3]
};
var b = bar(3); // 2 3
console.log(b); // 5


// new 运算符

function foo (a) {
	window._global = this
	this.a = a;
}
var bar = new foo(2);

console.log(window._global === bar) // true
console.log(bar.a); // 2

// 隐性绑定, 显性绑定和new优先级

// 隐性绑定 和 显性绑定

function foo () {
	console.log(this.a);
}
var obj1 = {
	a: 2,
	foo: foo
};
var obj2 = {
	a: 3,
	foo: foo
};

obj1.foo(); // 2
obj2.foo(); // 3

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2

// 隐性绑定 和 new 优先级
function foo (something) {
	this.a = something;
}
var obj1 = {
	foo: foo
};

var obj2 = {
	a: 3
};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

obj1 = {
	foo: foo,
	a:2
}

obj2 = {
	a: 3
};


var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a);  // 4

// 硬性绑定和new
function foo (something) {
	this.a = something;
}

var obj1 = {};
var bar = foo.bind(obj1);

bar(2);
obj1 = {
	a: 2
}
console.log(obj1.a); // 2

var baz = new bar(3);

console.log(obj1.a); // 2
console.log( baz.a ); // 3

// new > call,apply,bind > 隐性this


function foo () {
	var self = this

	setTimeout(function () {
		console.log(self)
	})

	return function () {
		console.log(self);
	}
}

foo.call({name: 1});