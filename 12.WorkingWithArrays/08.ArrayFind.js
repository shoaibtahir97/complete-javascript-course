// Array Find Method
/*
Maps through an array and finds the value. It requires a condition to find the value, and returns the first value which matches the condition. It requires a return value. The return value is always a boolean. Once the value is found the loop will stop. The returned value is a single value and not an array. If it does not find any value it returns undefined.
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

// --------------------//-----------------------
const accounts = [
  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },

  {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
];

const myAccount = accounts.find((acc) => acc.interestRate < 1);
