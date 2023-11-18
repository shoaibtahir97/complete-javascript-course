//Rest Patterns and Paramaters
/*
They Rest pattern looks similar to spread operator. But does the opposite of rest operator. The spread operator was used to unpack an array elements, but the rest pattern is used to collect the elements and make a new array.
Spread operator is used on the right side of assignment operator
Rest operator is used on the left side of the assignment operator together with destructuring.
*/

//Spread Operator ---> Always on the right side of '=' sign
const arr = [1, 2, 3, ...[4, 5]];
console.log(arr); //Unpacks the array

//Rest Operator ---> Always on the left side of '=' sign
const [a, b, c, ...other] = arr;
console.log(a, b, other); // Packs into array

///////-------Rest Pattern Example 1--> Destructuring--------///////

///////-------Destructuring  in Array--------///////

const starterMenu = ["Salad", "Raita"];
const mainMenu = [
  "Single Nihari",
  "Maghaz Nihari",
  "Nalli Nihari",
  "Milky Roti",
];

const [, starter, , main, ...otherFoodItems] = [...starterMenu, ...mainMenu];
/*
Always use rest operator in the end after destructuring the elements which you need, otherwise javascript will not know which elements are left. JS will also give an error.
*/
console.log(starter, main, otherFoodItems);

///////-------Destructuring in Object--------///////
const openingHours = {
  thu: {
    open: 12,
    close: 12,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const { sat, ...weekdays } = { ...openingHours };
console.table("weekdays", weekdays, "weekend", sat);
/*
Here we destructured  sat from the openingHours object and collected the rest of the values
*/

///////-------Rest Pattern Example 1--> Functions--------///////
/*
Using the rest operator in function will compress the parameters into array, irrespective of the number of arguments passed in it.
*/

const add = (...numbers) => {
  // console.log(numbers); // here the numbers are compress
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log("sum", sum);
};

//Calling the same function with different number of arguments
add(1, 3);
add(5, 7, 11, 13, 17, 19);
add(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);

//Spreading the array and passing the values as individual elements, using spread operator
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add(...newNumbers);
