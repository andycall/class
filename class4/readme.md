课程四
==============

## 昨天内容复习

+ 作用域
+ let const
+ 练习题


## 函数

+ 函数声明, 函数赋值
+ this

- this的指向是在运行时确定的
- 判断一个函数内部this的指向, 要从这个函数是从哪里被调用来判断, 如果是当做一个对象的方法来调用, 那就指向这个对象. 如果是从外部直接调用, 那就指向 全局域(window)

类数组转数组  [].slice.call 

对于值类型的变量, (数字, 字符串, 布尔类型)
var b = a 的时候是直接拷贝一份新的

对于对象类型, (普通对象, 函数, 数组)
var b = a 的时候, 只是创建一个新的变量重新指向原有的对象

```javascript
function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm " + identify.call( this ); console.log( greeting );
}
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};

identify.call( me ); // KYLE
identify.call( you ); // READER
speak.call( me ); // Hello, 我是 KYLE
speak.call( you ); // Hello, 我是 READER

```

```
function foo() { 
    "use strict";
     console.log( this.a );
}
var a = 2;
foo() // undefined
```


```
function foo() { console.log( this.a );
}
var a = 2;
(function(){
    "use strict";
     foo(); // 2
 })();    
```

```
function foo() { 
    console.log( this.a );
}
var obj = { 
    a: 2,
    foo: foo
};

obj.foo() // 2
     
     
 
function foo () {
	console.log(this.a);
}
var obj2 = {
	a: 42,
	foo: foo
};
var obj1 = {
	a: 2,
	obj2: obj2
};
obj1.obj2.foo(); // 42
     
    
 
function foo () {
    console.log(this.a);
}

var obj = {
a: 2,
foo: foo
};

var bar = obj.foo; // 函数别名!
var a = "oops, global"; // a 是全局对象的属性

bar(); // "oops, global"
obj.foo()
     
```



+ 构造函数


+ 链式调用
+ call 和 apply