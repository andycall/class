import "babel-polyfill";

function* Generator () {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
}

var gen = Generator();

gen.next();
gen.next();
gen.next();
gen.next();
