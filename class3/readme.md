课程三
==========

### 运算符

+ || 与 &&

#### 语句声明和函数声明

在预编译阶段, 把声明的变量和函数都提前声明好, 之后在从最上面执行代码.

1. 预编译, 找出声明的变量和函数
2. 从头开始执行代码, 执行赋值操作

#### 全局变量与局部变量

#### ES6

chrome 开启es6支持
地址栏里输入 about:flags
启用实验性Javascript

+ let
+ const

[Babel](https://babeljs.io/) es6 --> es5

#### 作用域讲解

1. 在变量所在的这个作用域内查找.
2. 在外层的作用域查找, 直至找到全局作用域
3. 在全局作用域查找

**一个变量是否在一个作用域内部是在预编译阶段完成的. 之后代码才开始执行.**

#### for in 

+ hasOwnProperty 判断一个对象的属性在for in 循环的时候是否是自己的属性,而不是继承来的.

```javascript
    var obj = {
        name: 1,
        age: 20,
        height: 175
    }
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key)
        }
    }
```

练习课

### Question 1

这有一个长的字符串

```javascript
var str = "http://yjly.bj.bcebos.com/yjly/Scenic/143088823736851.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695@2x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481@3x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088888739695@2x.jpeg"
```

从这一长字符串中找出名称不重复的图片地址

Tips
去除字符串所有的空格
str.replace(/\s+/g, '')

分割字符串用split

先把字符串拆分成数组, 然后依次循环数组来处理



去除以jpg或者png或者gif或者jpeg为后缀的图片路径
str.replace(/\.(jpg|png|gif|jpeg)/, '')


### Question 2
实现一个简单的 parseBoolean 转换函数

例如

```javascript
parseBoolean(false) // false
parseBoolean('false') // false
parseBoolean(true) // true
parseBoolean('true') // true
parseBoolean(null) // false
parseBoolean(0) // false
parseBoolean(1) // true
parseBoolean(-1) // true
parseBoolean([]) // true
```

### difference 函数
对比一个数组, 找出和传入第二个数组不同的元素

```javascript
difference([2, 3, 4, 5], [2, 4, 6]) // [3, 5]
```

### compareVersion 函数
对比 android 设备版本

```javascript
compareVersion('4.4.4', '4.4.0') // true
compareVersion('4.4.4', '4.4.9') // false
compareVersion('4.4.4', '4.4.4') // true
```


### 对象(入门)

+ 创建对象

var a = {}
var b = new Object();

+ 访问对象属性

a.xxx
a[xxx]

+ 添加对象属性

a.xxx = 123
a[xxx] = 123

+ JSON

- JSON.parse
- JSON.stringify

+ instanceof

