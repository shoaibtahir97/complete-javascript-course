const numbers = [10, 20, 120, 294];

let sum = 0;

// Declarative ForEach Method
/*
It is only used for looping and does not return anything like map function.
If you try to return it will return undefined
If you do not want to update the original array or create a new array, or you do not want to return anything from the array, then you can use the forEach method 
*/

const incrementedNumbers = [];

numbers.forEach((number, index, originalArray) => {
  return number;
});

numbers.forEach(function (number) {
  incrementedNumbers.push(number + 1);
});

console.log("incrementedNumbers", incrementedNumbers);

console.log(sum);
