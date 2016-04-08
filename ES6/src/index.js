"use strict"

import './index.scss'
import _ from 'lodash'

// import './index2.js'
// import $ from 'jquery'

// function func (a=1, b=2) {
//   console.log(a, b)
// }

// func(22)

// // var b = 'asdssdsdd';

// // [].slice.call();

// // var str = '<div class="container">' + 
// //     '<div>' + b + '</div>'
// // '</div>';

// // var str = `<div class="container">
// //     <div>${b}</div>
// // </div>`

// // document.body.innerHTML = str;

// // var divs = document.querySelectorAll('div');

// // console.log(divs.forEach);
// // console.log(Array.from(divs).forEach);
// // console.log(Array.of(1,2,3,4,5))


// function test (a, b, c, ...args) {
//     console.log(args);
// }

// // test(1,2,3,4,5,6,2,3,6);

// var a = [1,3,4,5]
// var b = [7,7,7,7];

// // a.concat(b)

// var f = function () {
//     setTimeout(() => {
//         console.log(this);  
//     });    
// }

// // var obj = {
// //     fnc: (args1, args2) => {
// //         console.log(this);
        
// //         setTimeout(() => {
// //             console.log(this);
// //         });
// //     }
// // }

// // obj.fnc();

// // f.call({name: 1});

// function outer () {
//     return function inner () {
//         console.log(1234);
//     }
// }

// var outerFunc = () => {
//     return () => {
//         console.log(1234);
//     }
// }

// var obj = {name: 1}


// function f () {
//     var m = 1;
//     var b = 2;
//     caculate(1, 2);
// }
// // 只要一个函数内部中的任意一个变量存在外部引用，整个函数的作用域和变量都不会被垃圾回收期所回收

// function caculate (a, b) {
//     console.log(a + b);
// }

// f();

// var height = 100;

// var a = {
//     name: 1,
//     age: 2,
//     height
// }

// console.log(a);

// var obj = {
//     name: 1
// }

// var empty = {};

// Object.assign(empty, _.cloneDeep(obj));

// console.log(empty);

let a = Symbol('a');
let _a = Symbol('a');

console.log(a == _a);

// uid;
// 一大串列表
// 每一个编号都必须不一样
// Symbol 从根本上解决了这个问题

var obj = {};

obj[a] = 123;
obj[_a] = 456;

console.log(obj[a]);
console.log(obj[_a]);
console.log(obj[Symbol('a')]);

function output (type) {
    switch(type) {
        case config.a:
            console.log(config.a);
            break;
            
        case config.b:
            console.log(config.b);
            break;
    }
}

var config = {
    'a': Symbol(),
    'b': Symbol()
}


output(config.a);

