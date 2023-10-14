const exponentiationNum = (x, y) => {
  let result = x;
  if (x >= 1 && y >= 1 && Number.isInteger(x, y)) {
    for (let i = 1; i < y; i++) {
      result *= x;
    }
    return result;
  }
  return `число ${x} и/или ${y} не натуральное`;
};
console.log(exponentiationNum(2, 3));
console.log(exponentiationNum(0, 3));
console.log(exponentiationNum(2, 0));
console.log(exponentiationNum(2.5, 3));
console.log(exponentiationNum(2, -3));
