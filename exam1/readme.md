小测试
===========

## test1

完成index.js里面有关类型判断的函数

## test2

计算数组
```javascript
var a = [1,2,3,'a','2ew', 88, 223, 21, 23, 45]
```

#### Result
```javascript
a.filter(function (arrValue) {
  return typeof arrValue !== 'string' || !!parseInt(arrValue)
}).map(function (arrValue) {
  return parseInt(arrValue)
}).reduce(function (total, nextValue) {
  return total+ nextValue
})
```

```javascript
a.filter(function (arrValue) {
  return typeof arrValue !== 'string'
}).reduce(function (total, nextValue) {
  return total+ nextValue
})
```

```javascript
a.reduce(function (total, nextValue) {
  return total+ nextValue
})
```

for in
for of

underscore, lodash, jQuery.

$.each
lodash.each
underscore.each

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

local
1234a
12323

## test4
补充test5中的class里面的值, 完成题目要求

### 方案1
```css
display: table-cell;
vertical-align: middle;
```css

对于图文混排, 使用verticle-align: middle. 能让图片和文字保持水平对齐

### 方案2
[使用flexbox](http://www.w3cplus.com/css3/flexbox-basics.html)

直接使用margin: auto 就能实现水平垂直居中.

[兼容性](http://caniuse.com/#search=flexbox)

对于国产浏览器,比如微信, 手机百度客户端. 微信浏览器和手机百度客户端对于flexbox的支持只有20%. 也就是
display: flex-box; flex-direction: column. 有些属性会出现bug, 一定要充分测试.

[测试网站](http://css3test.com/)

### 方案3
使用position;

display: block;
position: absolute的top和bottom相等和margin-top: auto; margin-bottom: auto, 就会让元素垂直居中, left和right相等和margin-left: auto; margin-right: auto;. 就会让元素水平居中
margin: auto auto auto auto;

内部元素需要有个高宽值

### 方案4
让内部元素垂直居中的方式是height和line-height相等. 
水平居中就是text-align: center;

如果一个元素的外部使用了很大的line-height值, 可以使用line-height: normal; 来保证内部元素的原有形态.

### 方案5

position: relative;
top: 50%;
left: 50%;
transform: translateY(-50%) translateX(-50%);

使用top: 50%;和 left: 50%, 可以让内部元素的左上角的点移动到中心位置, 然后通过translateX和translateY 移动元素高宽的一半, 来实现中心点居中.


+ display: table
+ border-spacing 能控制设置 display: table的元素内部元素(display: table-cell;)的宽高等属性.
+ verticle-align 组合 display: table-cell;
+ 垂直居中的一种方案: 元素采用display: table-cell; 加上verticle-align可以实现内部元素垂直居中
+ verticle-align 只能使用于display:inline-block或者display:inline的元素.

## test5

```javascript
function foo (something = 2, b=4) {
	console.log(this.a, something); // 2 2
	return this.a + something; // 4
}

var obj = {
	a: 2
};

var bar = function () {
    arguments = [2, 4]
    this = obj
	return foo.apply(this, arguments);
};
var b = bar(3, 2, 4, 5); 
var e = bar.call(obj, 2, 4)

console.log(b);
console.log(e);
```
计算出b和e的值,并说出为什么.
console.log(this.a, something) ==> undefined 3
b = NaN

console.log(this.a, something) ==> 2 2
e = 4