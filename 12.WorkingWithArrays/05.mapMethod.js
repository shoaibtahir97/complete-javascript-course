// Array.map()
/*
Map function always returns a new array of the same length. The array contains at each position the result of applying the callback function at each element.
It also returns three parameters like forEach, first is item, second is index and third is original array.
In map function's callback function returned value is required. If you do not return any thing then undefined is returned, and all the elements will be undefined.  
*/

// 1.
const numbers = [10, 20, 30, 40, 50];

const newNumbers = numbers.map((number, index, originalArr) => {
  return number * index;
});

// 2.
const users = [
  { username: "Mike", age: 20 },
  { username: "John", age: 28 },
  { username: "Paul", age: 30 },
];

const newUsers = users.map((user, index, originalArr) => {
  return { ...user, username: user.username.toUpperCase() };
});
