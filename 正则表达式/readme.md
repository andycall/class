正则表达式
============

[^>] 匹配不是>的其他类型
'helloworld12355'.replace(/\d+/, 'xxx'); --> 'helloworldxxx'

作业

1. 匹配电话号码

// 05 577020333
// 05-571010023
// +86 10 58003990
// +86 10-58003990

2. HTML 匹配

<div class="name">Helloworld</div> // helloworld

<p>xxx</p> --> // xxx

3. 找到代码中所有的有这样语法的

把 `__url` 这个字符替换成http://baidu.com

### 可选题
4. 找到hard.js里面所有require函数获取的内容
    
答案是
['http', 'fs', 'proxy']
