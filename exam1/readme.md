小测试
===========

## test1

完成index.js里面有关类型判断的函数

## test2

计算数组
```javascript
var a = [1,2,3,'a','2ew', 88, 223, 21, 23, 45]
```

中所有的数组值的总和

## test3

```javascript
var globalVar = '12323';

function global (val) {
	var outerVar = 'outer';
    
	return function outer (val2) {
	        
	    outerVar = '1234' + val;
	
		return function local (val3) {
			var localVar = 'local';

			console.log(localVar);
			console.log(outerVar);
			console.log(globalVar);
		}
	}
}
```

`global('a')('b')('c')`
运行之后输出的值是什么, 为什么?

## test4
补充test5中的class里面的值, 完成题目要求

## test5

```javascript
function foo (something) {
	console.log(this.a, something);
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function () {
	return foo.apply(this, arguments);
};
var b = bar(3, 2, 4, 5); 
var e = bar.call(obj, 2, 4)

console.log(b);
console.log(e);
```
计算出b和e的值,并说出为什么.