课程五
===========

## 闭包

this的指向是在代码运行时来确定的.
obj.func -> this == obj
func () -> this === window
func.call(xxx) -> this === xxx

闭包入门

闭包是用来确定函数内部
一个变量是否能被访问

这个变量能还是不能. 是在这个作用域还是不在.

xxx被一个函数给闭包了. --> 一个变量是xxx, 它在这个函数的内部.在这个函数内部可以被访问到, 但是在函数外部就不能被访问.

闭包是一个动词, 一个变量xxx被嵌入到一个作用域内, 而且无法被改变(作用域的关系).

作用域之前的确定是在代码预编译阶段,

只有不使用 with 这个变量.

各个函数和变量之间的关系是根据代码结构来进行分析, 而不是在运行的时候来动态分析.

如果一个函数内部存在一些变量, 含有外部相关的引用. (一个函数内部的变量需要到函数外部查找到相应的值, 这个函数就无法被垃圾回收器所回收.


## DOM 编程

DOM 树状图

+ 选择器
    - document.getElementById
    - document.getElementsByClassName
    - document.getElementsByTagName
    - document.querySelector
    - document.querySelectorAll

+ parentNode // 一个子节点父级元素
    - childChild
    - lastChild
    - nextSibling
    - nodeName
    - nodeValue

+ 创建节点
+ appendChild
+ createDocumentFragment
+ innerHTML 和 createDocumentFragment

+ location
    - protocol
    - hostname
    - host
    - port
    - hash
+ navigator
    - userAgent
+ setTimeout
    - 
+ setInterval
    - 
+ clearInterval
   
var timer = setInterval(function () {
 console.log(1)
}, 100)

clearInterval(timer);
    
    
## fragment 节点
让多次appendChild操作, 节省成一步, 减少了重排的次数.

## 重排与重绘

重排 
重新计算元素位置 = 浏览器重排
触发浏览器重排的条件.
牵一发动全身.

重绘, 只会更新属性更改的元素, 而不会去影响到其他元素