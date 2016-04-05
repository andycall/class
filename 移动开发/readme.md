移动端开发
==================

方案一:
设置
  <meta name="viewport" content="width=750">

缩放比例值 = 屏幕宽度 / 750

宽度为设计稿的宽度. 之后所有的设备都会按照此宽度进行缩放.

让浏览器缩放到做网页的宽高

跟开发PC页面一模一样

方案二:

rem = body的font-size * rem相对值

需要在head标签最顶部插入一小段JS, 来计算font-size

所有的rem计算都根据计算font-size的时候除以的比例. (比例能自定义)


让网页缩放当浏览器的宽高

浏览器进行页面缩放, 无论是页面缩放到浏览器去,还是浏览器缩放到页面, 都会遵循一个原则是 --> 等比例缩放

所以就只要指定一个缩放的比例值

缩放比例值 = 屏幕宽度 / 750


## 推荐使用的新技术
flexbox
支持度比较广

会有浏览器不支持的情况.
比如某某安卓的微信就跪了.
还是一句话, 慎用

## 点透
在手机端, 用户手点击一下. 会同时触发2个事件, touchstart, click
click相比touchstart触发的要慢, 100ms

所有的地方都不用click, 就能完美解决

或者用fastclick


## 手机开发如何调试

chrome remote debug

chrome://inspect

safari remote debug

开发, 有mac, 有iphone, 土豪专属

firefox remote debug

微信浏览器 --> 去微信文档下载微信开发者工具 (分享, 调试页面.)

weinre https://people.apache.org/~pmuellr/weinre/docs/1.x/1.5.0/