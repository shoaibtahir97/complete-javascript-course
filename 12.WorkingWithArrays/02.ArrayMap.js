// Array.map()
/*
Map function always returns a new array of the same length, 
It also returns three parameters like forEach, first is item, second is index and third is original array.
In map function a returned value is required. If you do not return any thing then undefined is returned, and all the elements will be undefined.  
*/

const numbers = [10, 20, 30, 40, 50];

const newNumbers = numbers.map((number, index, originalArr) => {
  return number * index;
});

console.log(newNumbers);

const users = [
  { username: "Mike", age: 20 },
  { username: "John", age: 28 },
  { username: "Paul", age: 30 },
];

const newUsers = users.map((user, index, originalArr) => {
  return { ...user, username: user.username.toUpperCase() };
});

console.log("newUsers", newUsers);
