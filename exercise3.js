function sum(x) {
  return function (y) {
    return x + y;
  };
}
console.log(sum(1)(2), sum(2)(10), sum(80)(20));
