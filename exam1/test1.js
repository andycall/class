var a = [1,2,3,'a','2ew', 88, 223, 21, 23, 45]

console.log(a.reduce(function (total, nextValue) {
  if (typeof nextValue === 'string' && !parseInt(nextValue)) {
    return total;
  }

  return total + parseInt(nextValue);
}));
