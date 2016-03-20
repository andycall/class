//var Obj = {}; // 不可写 不可枚举
//
//Obj.name = 123;
//
//console.log(Obj.name); // undefined
//
//for (var key in obj) {
//  console.log(obj[key]) // undefined
//}

// ES5
// 是否可写
// 是否可枚举
// 是否可配置
//
//var o = {
//  name: 222,
//  age: 20
//};
//
//// 如果用defineProperty定义新属性, 默认不可写
//Object.defineProperty(
//  o,
//  'name',
//  {
//    value: 123,
//    writable: false, // 不可写,
//    enumerable: false, // 不可枚举,
//    configurable: true
//  }
//)
//
//o.name = 123444;
//
//for (var key in o) {
//  console.log(key, o[key]);
//}
//
//Object.defineProperty(
//  o,
//  'name',
//  {
//    value: 123,
//    writable: true, // 不可写,
//    enumerable: true, // 不可枚举,
//    configurable: true
//  }
//)
//console.log('------------------')
//
//o.name = 44444;
//
//for (var key in o) {
//  console.log(key, o[key]);
//}


//var e = {}
//
//e.name = 123;
//
//console.log(e.name);
//
//delete e.name;
//
//console.log(e.name);


// 引用的值并不能被设置成不可写
//var obj = {
//  name: [1,2,3]
//}
//
//console.log(obj.name);
//
//Object.defineProperty(obj, 'name', {
//  writable: false
//});
//
//obj.name.push(4);
//
//console.log(obj.name);

//var obj = {};
//
//obj.name = 123;
//
//Object.preventExtensions(obj);
//
//obj.xx = 4444;
//
//console.log(obj.xx);


//var obj = {};
//
//obj.name = 123;
//
//Object.seal(obj);
//
//obj.eee = 4444;
//
//console.log(obj.eee);
//
////Object.defineProperty(obj,'eee', {
////  writable: false
////})
//
//obj.eee = 555;
//console.log(obj.eee);
////console.log(obj.name);
//


var obj = {
  index: 0,
  get name () {
    return this.index++;
  },

  set name (val) {
    val += 1;
    this.index = val;
  }
};

console.log(obj.name)
console.log(obj.name)
console.log(obj.name)
console.log(obj.name)
console.log(obj.name)
console.log(obj.name)
console.log(obj.name)

obj.name = 999

console.log(obj.name)