let _true = "Это простое число";
let _false = "Это сложносоставное число";
let _err = "Данные неверны";
function isPrime(num) {
  if (num <= 1 || num > 1000) {
    return _err;
  }
  if (num == 2) {
    return _true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return _false;
    }
  }
  return _true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(99));
console.log(isPrime(1001));
