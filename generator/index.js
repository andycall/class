// function f () {
//   var pre = 0;
//   var curr = 1;
//
//   for (;;) {
//     pre = curr;
//     curr = pre + curr;
//
//     console.log(curr);
//   }
// }
//
// f();

"use strict";


var a = [1,2,3,4];


// function F (start) {
//   this.value = start;
//
//   this[Symbol.interator] = function () {
//     return this;
//   }
//
//   this.next = function () {
//     console.log(1234);
//   }
// }

class F  {
  constructor (start) {
    this.value = start;
  }

  [Symbol.iterator] () {
    return this
  }

  next () {
    this.value ++;

    if (this.value < 10) {
      return {
        done: false,
        value: this.value
      }
    }

    return {
      done: true,
      value: null
    }
  }
}

var f = new F(0);


function* map () {
  var a = yield 1;
  console.log('a', a);

  var b = yield 2
  console.log('b', b);

  var c = yield 3;

  return c;
}


function* generator (value1) {
  console.log('value1', value1);

  var value2 = yield 99; // first next

  console.log('value2', value2);

  var value3 = yield 3; // second next

  console.log('value3', value3);

  var value4 = yield* map();

  console.log('value4', value4);

  return value4;
}

var gen = generator(10);

console.log('first next', gen.next());


console.log('second next', gen.next(2));
console.log('third next', gen.next(333));
console.log('fouth next', gen.next(444));
console.log('fifth next', gen.next(555));
console.log('fifth next', gen.next(666));

// 排除第一次运行next, 后续执行next函数, 第N个next函数穿过的实参会等于第N个yield语句的返回值
// generator函数第N次调用next的返回值会等于第N个yield的值

// console.log(gen.next(555));
// console.log('third next', gen.next(3));

// console.log('second next', gen.next(30));
// console.log('third next', gen.next(40));


// for (var x of gen) {
//   console.log(x);
// }

// // 数组 字符串 有Symbol.interator 方法
//
// for (var str of 'helloworld') {
//   console.log(str);
// }