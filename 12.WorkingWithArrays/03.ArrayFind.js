// Array Find Method
/*
Maps through and array and finds the value. It requires a condition to find the value, and returns the first value which matches the condition. It requires a return value. The return value is always a boolean. Once the value is found the loop will stop. If it does not find any value it returns undefined.
*/

const users = [
  { username: "Mike", age: 20 },
  { username: "John", age: 28 },
  { username: "Paul", age: 30 },
];

const userToFind = users.find((user) => user.age > 20 && user.age < 30);
console.log(userToFind);

// If a condition is complex(checking for more than one condition) then you manually return true/user or false
const complexUserFound = users.find((user) => {
  const matchingName = user.username.toLowerCase() === "mike";
  const matchingAge = user.age > 27;
  if (matchingName && matchingAge) {
    return true;
  }
  return false;
});

const numbers = [10, 20, 30, 40];
