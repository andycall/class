
var a = 3;
function foo () {
  var a = 2;

  return function bar () {
    console.log(a); // 2
  }
}

var outer = foo();

outer();


function foo () {
  var a = 2;

  function baz () {
    console.log(a); // 2
  }

  bar(baz);
}

var a = 4;

function bar (fn) {

  fn();
}


var fn;

function foo () {
  var a = 2;

  function baz () {
    console.log(a); // 2
  }

  fn = baz; // 将 baz 分配给全局变量
}

function bar () {
  fn();
}

foo();
bar(); // 2


function wait (message) {
  setTimeout(function timer () {
    console.log(message);
  }, 1000);
}

wait("Hello, closure!"); // Hello closure !


for (var i = 1; i <= 5; i++) {
  setTimeout(function timer () {
    console.log(i); // 6 6 6 6 6
  }, 1000);
}


for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer () {
      console.log(j);
    }, 1000);
  })(i);
}


for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer () {
      console.log(j);
    }, j * 1000);
  })();
}


for (let i = 1; i <= 5; i++) {
  setTimeout(function timer () {
    console.log(i);
  }, 1000);
}

var div =document.getElementsByTagName('div');

for (var i = 0 ; i < div.length; i ++) {
  div.addEventListener('click', function () {
    alert(i);
  })
}


// 模块
// requirejs seajs commonjs umd ...
// 闭包的特性. 静态作用域.

function CoolModule () {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething () {
    console.log(something);
  }

  function doAnother () {
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3