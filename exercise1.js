let array = [2, 3, 5, 6, 6, 6, 0, null, NaN, "", 4, 6, 5, 7, 6];
let oddNum = 0;
let evenNum = 0;
let notNum = 0;
let nullElement = 0;
array.forEach(function (item) {
  if (typeof item !== "number" || Number.isNaN(item)) {
    notNum++;
  } else if (item == 0) {
    nullElement++;
  } else if (item % 2 === 0) {
    evenNum++;
  } else {
    oddNum++;
  }
});
console.log(notNum);
console.log(nullElement);
console.log(evenNum);
console.log(oddNum);
