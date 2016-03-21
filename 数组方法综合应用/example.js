// 语句声明

//console.log(helloworld); // undefined
//
//var helloworld = 'helloworld';
//
//Test();
//
//function Test () {
//	console.log(helloworld); // helloworld
//}
//

var globalVar = 'global';

function global () {
	var outerVar = 'outer';

	return function outer () {
		return function local () {
			var localVar = 'local';

			console.log(localVar);
			console.log(outerVar);
			console.log(globalVar);
		}
	}
}

//global()()()


for (var i = 0; i < 10; i ++) {}
console.log(i);// 10

"use strict";
for (let j = 0; j < 10; j ++) {}
console.log(j);

// Example1

//console.log(foo) // undefined

//var foo = 1;
//
//test1();
//
//function test1 () {
//	console.log(foo); // 1
//}

//for (var i = 0; i < 10; i ++) {}
//console.log(i);


//for (let i = 0; i < 10; i ++) {}
//console.log(i);

//"use strict";
//
//let test1 = 1234;
//
//test1 = 888;
//
//console.log(test1);

// 作用域

//var global = 'global';
//
//function outer () {
//	var local = 'local';
//	var global = 123;
//
//	function inner () {
//		var inner = 'inner';
//		console.log(global); // 123
//	}
//
	console.log(global); // undefined
//	inner();
//}

// 1. 在变量所在的这个作用域内查找.
// 2. 在外层的作用域查找
// ...
// n. 在全局作用域查找

// 一个变量是否在一个作用域内部是在预编译阶段完成的. 之后代码才开始执行.
//outer();

//var obj = {
//	name: 1,
//	age: 20,
//	height: 175
//}
//
//for (var key in obj) {
//	if (obj.hasOwnProperty(key)) {
//		console.log(key)
//	}
//}
