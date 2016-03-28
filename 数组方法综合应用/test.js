var str = "http://yjly.bj.bcebos.com/yjly/Scenic/143088823736851.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481.jpg,http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739695@2x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088823739481@3x.jpg, http://yjly.bj.bcebos.com/yjly/Scenic/143088888739695@2x.jpeg";

function getImage (str) {
  var imageArr = str.replace(/\s+/g, '').split(',');
  var result = [];
  var images = [];

  imageArr.forEach(function (url) {
    var pointArr = url.split('.');
    var imageUrl = pointArr.slice(0, -1).join('');
    var imageName;

    if (imageUrl.indexOf('@') >= 0) {
      imageName = imageUrl.split('@')[0];
    }
    else {
      imageName = imageUrl;
    }

    if (result.indexOf(imageName) < 0) {
      result.push(imageName);
      images.push(url);
    }
  })

  return images;
}

//console.log(getImage(str));


// 'true' 'false'
function parseBoolean (bool) {
  if (typeof bool === 'string') {
    return bool === 'true';
  }

  return !!bool;
}

//console.log(parseBoolean(true))
//console.log(parseBoolean(false))
//console.log(parseBoolean('true'))
//console.log(parseBoolean('false'))
//console.log(parseBoolean(0))
//console.log(parseBoolean(1))
//console.log(parseBoolean(-1))
//console.log(parseBoolean({}))
//console.log(parseBoolean([]))
//console.log(parseBoolean(function () {}))


function difference (pre, next) {
  return pre.filter(function (vpre) {
    return next.indexOf(vpre) < 0;
  });
}

//console.log(difference([2,3,4,5], [2,4,6]));

function compareVersion (pre, next) {
  var preVar = pre.split('.');
  var nextVar = next.split('.');
  var flag = [];

  for (var i = 0, len = preVar.length; i < len; i ++) {
    if (parseInt(preVar[i]) > parseInt(nextVar[i])) {
      flag[i] = 1;
    }
    else if (parseInt(preVar[i]) < parseInt(nextVar[i])) {
      flag[i] = -1;
    }
    else {
      flag[i] = 0;
    }
  }

  return (flag.every(function (val) {
    return val === 0
  })) || (flag.indexOf(1) < flag.indexOf(-1));
}

console.log(compareVersion('4.4.20', '3.5.2')); // true
console.log(compareVersion('4.4.0', '4.3.222222')); // true
console.log(compareVersion('4.4.20', '4.5.2')); // false
console.log(compareVersion('4.4.20', '4.4.20')); // false