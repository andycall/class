课程六
=============

## 上节课的练习讲解

## 递归的用法

## DOM操作高级

### 元素反转
### offsetWidth/offsetHeight,clientWidth/clientHeight与!!(scrollWidth/scrollHeight), scrollTop/scrollLeft

### DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系
IE8 +
如果直接使用点运算符, 自定义设置属性不会再DOM元素上更新, 只会变成dom对象的一个属性
如果是给一个已有属性赋值的话,却可以更新DOM元素上的属性值

如果使用setAttribute来更新DOM元素的属性, 都会直接在HTML上体现出来.

同样对于getAttribute和e.propName, 使用点去访问属性只能访问到浏览器定义好的属性值, 比如id, className, style. 在html上定义的自定义属性值只能用getAttribute来访问到.

## 面试题

### javascript有哪些方法定义对象
var obj = {}
var obj = new Object();

## 事件入门

### click, touchstart, touchend
### mouseenter/mouseleave, mouseover/mouseout
### submit, focus, blur
