// import $ from 'jquery'
var fs = require('fs');

console.log(1);

function callback () {
  return new Promise(function resolve () {
    console.log(3);
    console.log(data.toString());
  }, function reject () {
    console.log('error!!!!!');
  });
}

function readFile (path) {
  return new Promise(function (resolve, reject) {  
    fs.readFile(path, function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);  
    })
  })
}


function readFiles (arrs) {
  return arrs.map(function (filePath) {
    return readFile(filePath);
  })
}

// var read1 = readFile('./index.js');
// var read2 = readFile('./index.scss');
// var read3 = readFile('./index2.jsxxx');
// var read4 = readFile('../index.html');

var promise = readFiles(['./index.js', './index.scss', './index2.js', '../index.html']);

// promise.then(function (data) {
//   console.log(data.toString());
// }).catch(function (err) {
//   console.log(err);
// });

Promise.all([read1, read2, read3, read4]).then(function (output) {
   console.log(output);
}).catch(function (err) {
  console.log(err);
})

// function ajax1 (fn) {
//   $.ajax({
//     url: '/package.json',
//     method: 'get',
//     success: function (data) {
//       fn(data);
//     }
//   });
// }

// function ajax2 (fn) {
//   $.ajax({
//     url: '/package.json',
//     method: 'get',
//     success: function (data) {
//       fn(data);
//     }
//   });
// }

// function ajax3 (fn) {
//   $.ajax({
//     url: '/package.json',
//     method: 'get',
//     success: function (data) {
//       fn(data);
//     }
//   });
// }

// function ajax4 (fn) {
//   $.ajax({
//     url: '/package.json',
//     method: 'get',
//     success: function (data) {
//       fn(data);
//     }
//   });

// }

// var index = 0;

// ajax1(function () {
//   console.log('1 complete')
//   ajax3(function () {
//     console.log('3 complete')
//     ajax2(function () {
//       console.log('2 complete')
//       ajax4(function () {
//         console.log('4 complete')
//         console.log('all ajax complete')
//       });
//     });
//   });
// });

// var callback = function () {
//   console.log('call ajax complete');
// }

// ajax1(function () {
//   index++;
  
//   if (index > 4) {
//     callback();
//   }
// })
// ajax2(function () {
//   index++;
  
//   if (index >= 4) {
//     callback();
//   }
// })
// ajax3(function () {
//   index++;
  
//   if (index > 4) {
//     callback();
//   }
// })
// ajax4(function () {
//   index++;
  
//   if (index > 4) {
//     callback();
//   }
// })

// ajax1 --> ajax3 --> ajax2 --> ajax4
// 4个ajax都执行完之后

// 想要在4个ajax都运行完之后再执行某个逻辑

// 批量上传的网站， 我想让所有的上传都完成之后弹出一个提示