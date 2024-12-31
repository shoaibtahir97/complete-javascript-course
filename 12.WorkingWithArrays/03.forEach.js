// const numbers = [10, 20, 120, 294];

// let sum = 0;

// // Declarative ForEach Method
// /*
// It is only used for looping and does not return anything like map function.
// If you try to return it will return undefined
// If you do not want to update the original array or create a new array, or you do not want to return anything from the array, then you can use the forEach method
// */

// const incrementedNumbers = [];

// numbers.forEach((number, index, originalArray) => {
//   return number;
// });

// numbers.forEach(function (number) {
//   incrementedNumbers.push(number + 1);
// });

// console.log("incrementedNumbers", incrementedNumbers);

// console.log(sum);
//------------------------------------------------------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOR EACH ----");

/*
1. The forEach method requires a callback function in order to tell it what to do in each iteration. 
2. The forEach loops over the entire array and executes the callback function on each iteration. 
3. The forEach method passes the current element of the array as an argument in the function and then we can perform logic on each iteration.
4. We use callback function to tell the higher order function what it should do. So we give the instructions to the forEach method in the callback function that what it should do on each iteration.
5. The second argument of the callback function is the index of the current element of the array.
6. The third argument of the callback function is the entire array which we are looping over.
* When to use for of and when to use forEach ---> If you want to break the loop in the middle you should use the for of function because the forEach function would complete looping over the entire array.
*/
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
