"use-strict";

const restaurant = {
  name: `Mandi House`,
  location: `SuperHighway, Karachi`,
  categories: [
    "Italian",
    "Desi",
    "Continental",
    "Thai",
    "Fast Food",
    "Bar B Que",
  ],
  starterMenu: ["Soup", "Salad", "Fruits", "Green Tea"],
  mainMenu: ["Pizza", "Pasta", "Risotto", "Burger"],
  //returning more than one values from a function
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Array Destructuring

//Old way of accessing data
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Array Destructuring

// const [x, y, z] = arr;

// const [first, second] = restaurant.categories;
// console.log(first, second);

//If we want to access an element from the middle than we would place an empty value to neglect that element and access the middle element

// const [menu1, , menu3] = restaurant.mainMenu;
// console.log(menu1, menu3);

///////////--------------------////////////////////////
//Switching Variables values
let [first, second] = restaurant.categories;

//Hard Way through Variables
const temp = first;
first = second;
second = temp;

//Easy Way through Destructuring
[second, first] = [first, second];

// console.log(first, second);

/////////////////--------------------////////////////////////
//Return more than one values from a function

const [starter, main] = restaurant.order(2, 1); //Destructuring the values returned in form of array
// console.log("🚀 ~ file: index.js:60 ~ main:", main);
// console.log("🚀 ~ file: index.js:60 ~ starter:", starter);

///////-------Destructuring Nested Arrays--------///////
const nestedArr = [3, 6, [9, 12]];

const [i, , j] = nestedArr;
// i = 3 // j = [9,12]

//If we wanted all three of the values individually we could do this
const [q, , [r, s]] = nestedArr; // destructuring again inside destructuring

///////-------Destructuring Arrays with Default Values--------///////
const [l = 1, o = 1, p = 1] = [9, 8]; //we are accessing the second index at p but it is undefined. We can set default values if we do not know the value of the index

console.log(i, o, p); // Now if a value does not exist it will return 1 as default

///////-------Practice--------///////

const array = ["hello", "world", ["how", "are", "you"]];
const [greet, , [secQues, thirdQues, fourthQues = "they"]] = array;

console.log(greet, secQues, thirdQues, fourthQues);

const myRestaurant = {
  name: `Mandi House`,
  location: `SuperHighway, Karachi`,
  categories: [
    "Italian",
    "Desi",
    "Continental",
    "Thai",
    "Fast Food",
    "Bar B Que",
  ],
  starterMenu: ["Soup", "Salad", "Fruits", "Green Tea"],
  mainMenu: ["Pizza", "Pasta", "Risotto", "Burger"],
  //returning more than one values from a function
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
let [firstServe, mainCourse] = myRestaurant.order(1, 2);

console.log(firstServe, mainCourse);
[mainCourse, firstServe] = [firstServe, mainCourse];
console.log(firstServe, mainCourse);
