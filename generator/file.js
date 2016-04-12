var fs = require('fs');

// fs.readFile('./index.js', function (err, data) {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//
//   console.log(data.toString());
// });

function readFile (filepath) {
  fs.readFile(filepath, function (err, data) {
    if (err) {
     c.throw(err);
    }

    c.next(data); //4
  });
}


function readFile (filepath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, function (err, data) {
      if (err) {
        reject(err);
      }

      resolve(data);
    })
  });
}

// readFile('./qwdwqdwd.js').catch(function (err) {
//   debugger;
//   console.log(err);
// });
//
function* co () {
  try {
    var index1 = yield readFile('./indqdqwdqwex.js'); // 3
    var es6 = yield readFile('../ES6/package.json');
  }
  catch (e) {
    console.log('error!!!!', e);
  }
  // console.log(index1.toString());
  // console.log(es6.toString());
}

var c = co(); //1

c.next(); // 2




// fs.readFile('./index.js', function (err, data) {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//
//   console.log(data.toString());
// })
//
// fs.readFile('./ssss.js', function (err, data) {
//   if (err) {
//     // throw new Error(err);
//     return false;
//   }
//
//   console.log(data.toString());
// })
//

// try {
//   fs.readFile('./indexwwdwd.js', function (err, data) {
//     if (err) {
//       throw new Error(err);
//     }
//
//     console.log(data.toString());
//   })
// }
// catch (e) {
//   console.log('read file error');
// }

// fs.readFile('../ES6/package.json', function (err, data) {
//   if (err) {
//     console.log(err);
//     return false;
//   }
//
//   console.log(data.toString());
// })

// process.on('uncaughtException', function (err) {
//   console.log(err);
//   console.trace();
// })
