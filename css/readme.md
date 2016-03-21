课程一
============

## HTML
+ 标签
+ 属性
+ 标签闭合
+ 自闭和标签
    - <br />
    - <img />
    - <meta />
    - <embed />
    - <input />
    - <param />
    - <wbr />
    - <hr />
+ 块级元素
    + div p h1 h2
    

+ 行内元素
  
+ html 注释
    
## CSS

+ 选择器
    - ID
    - class
    - 元素
    - 属性

+ 选择器能不能找到元素
+ 对比选择器的优先级
+ 样式是否被下面相同优先级的样式所覆盖


+ 使用跨平台的样式重置库
    - [normalize.css](http://necolas.github.io/normalize.css/)

+ 样式层叠
+ 优先级计算

+ 盒模型
    - display inline block inline-block
    - margin
    - padding
    - border
    - border-radius
    - box-sizing

+ 浮动
    - 文档流
        - 脱离文档流
    - 左右浮动
    - 行内元素加了浮动之后就会具有块级元素的属性
    - 清除浮动

+ 定位
    - position

+ 背景
    - 颜色
    - 背景图片
    - 背景图片位置

+ 列表
    - 列表样式
    - 清除列表模式样式

+ 表单
    - input
    - textarea
    - radio checkbox
    - select options
    - file input
    - placeholder
    - legend
    - fieldset
    - disabled
    - required

- BFC
    - overflow: hidden;


## 面试题

+ doctype是做什么的
告诉浏览器这个页面要用什么样的模式来解析, 保证页面元素定义的可用, 现在浏览器要运行在标准模式(standards mode), 而不是怪异模式(Quirks mode )

+ 怪异模式和标准模式有啥区别?

[doc](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)

+ HTML 和 XHTML 有什么区别?
XHTML 是语法和HTML一样的XML, 有严格的闭合标签要求, HTML没这些规定.
XHTML 是基于XML的, HTML 是基于SGML

+ 如果一个页面的http 的Content头是application/xhtml+xml, 会存在什么问题
IE不支持application/xhtml+xml, 最好的方式就是在http请求阶段用 内容协商(content negotiation)

+ 如何支持多语言页面?
<html lang="en">

:lang(en) {

font-size: 85%;

font-family: arial, verdana, sans-serif;

}

:lang(zh) {

font-size: 125%;

font-family: helvetica, verdana, sans-serif;

}