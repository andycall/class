jQuery
============


1. $ 和 $()
2. $(document).ready
3. 避免冲突
   - var $j = jQuery.noConflict();
4. 属性
5. 选择元素
   - $( "#myId" );
   - $( ".myClass" );
   - $( "input[name='first_name']" );
   - $( "#contents ul.people li" );
   - $( "div.myClass, ul.people" );
   - 高级用法
   ```
    $( "a.external:first" );
    $( "tr:odd" );

    // Select all input-like elements in a form (more on this below).
    $( "#myForm :input" );
    $( "div:visible" );

    // All except the first three divs.
    $( "div:gt(2)" );

    // All currently animated divs.
    $( "div:animated" );
    ```
    - 判断是否选择元素
    - 过滤,重定义
    ```
    $( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
    $( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
    $( "ul li" ).filter( ".current" ); // unordered list items with class of current
    $( "ul li" ).first();              // just the first unordered list item
    $( "ul li" ).eq( 5 );              // the sixth
    ```
    - 表单选择器
        - $( "form :checked" );
        - $( "form :disabled" );
        - $( "form :enabled" );
        - $( "form :input" );
        - $( "form :selected" );
6. 元素操作
    - html
    - addClass
       - toggleClass
       - removeClass
    - 链式调用
        - $( "#content" ).find( "h3" ).eq( 2 ).html( "new text for the third h3!" );
    - text
    - width
    - height
    - offset
    - position
    - val
    - append
    - prepend
    - clone
    - remove
    - 创建标签
    - 操作属性
7. jQuery 对象
8. 定位元素
    - parent
    - parents
    - find
    - children
    - next
9. css 方法
10. 数据属性
    - data
11. 工具函数
    - trim
    - each
    - inArray
    - extend
    - proxy

12. ajax
