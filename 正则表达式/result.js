// 05 577020333
// 05-571010023
// +86 10 58003990
// +86 10 58003990

var numberReg = /(\+\d{2}\s?)?\d{2}(\-|\s)?\d{8}/

// <div>Helloworld</div>

var htmlReg = /<([a-zA-Z]+)\s[^>]+>(.*)<\/\1>/;

var regex = /<([a-zA-Z]+)\s[^>]+>(.*)<\/\1>/g;
var testString = "<div class='helloworld'>Helloworld</div>"; // fill this in
var match;
while ((match = regex.exec(testString)) != null) {
  // javascript RegExp has a bug when the match has length 0
  if (match.index === regex.lastIndex) {
    ++regex.lastIndex;
  }

//  console.log(match[1], match[2]);
  // the match variable is an array that contains the matching groups
}

// var url = __url; console.log(url);

var urlString = 'abc12345#$*%'

console.log(urlString.replace(/([^\d]*)(\d*)([^\w]*)/, function (match, p1, p2, p3) {
//  console.log(match);
  p2 = parseInt(p2) * 2;

  return p1 + p2 + p3;
}));

function findDependences (fnStr) {
  var dependencies = [];

  var regex = /require\(['"]([\w\-]+)['"]\)/g;
  var testString = fnStr; // fill this in
  var match;
  while ((match = regex.exec(testString)) != null) {
    // javascript RegExp has a bug when the match has length 0
    if (match.index === regex.lastIndex) {
      ++regex.lastIndex;
    }

    dependencies.push(match[1]);
    // the match variable is an array that contains the matching groups
  }

  return dependencies;
}