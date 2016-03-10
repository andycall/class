课程三
==========

### 运算符

+ || 与 &&

练习课

### Question 1

这有一个长的字符串

```javascript
var str = "http://yjly.bj.bcebos.com/yjly/Scenic/143088823736851.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695@2x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481@3x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088888739695@2x.jpeg"
```

从这一长字符串中找出名称不重复的图片地址

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

### params 函数
将一个对象的值解析成 x-www-form-urlencoded 的格式

```javascript
params({name: 1, age: 2}) // name=1&age=2
```



