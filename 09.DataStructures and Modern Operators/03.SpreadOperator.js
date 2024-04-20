const restaurant = {
  name: "Jawed Nihari",
  location: "F.B Area Block 17, Dastaghir, Karachi",
  categories: ["Nihari", "Paye", "Salad", "Roti"],
  starterMenu: ["Salad", "Raita"],
  mainMenu: ["Single Nihari", "Maghaz Nihari", "Nalli Nihari", "Milky Roti"],
  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  orderDelivery: function ({
    time = "12:00",
    location,
    starterIndex = 1,
    mainIndex = 3,
  }) {
    console.log(
      `Order Recieved, your order includes ${[
        this.starterMenu[starterIndex],
      ]} ${
        this.mainMenu[mainIndex]
      } which will delivered to ${location} at ${time}`
    );
  },
};

/*
Spread Operator is used to expand an array elements individually into all its element
*/

///////-------Old way of Accessing Array Values--------///////
const oldArr = [7, 9, 11];
const newArr = [2, 3, 5, oldArr[0], oldArr[1], oldArr[2]];
console.log(newArr);

///////-------New way of Accessing Array Values using Spread Operator--------///////

const arr = [1, 4, 5, 3, 6]; // unpacking an array elements
console.log("normal arr", arr);
console.log("spreaded arr", ...arr); // returns individual elements present in an array

// const newArr = [1, 2, ...arr];

///////-------Practical Example--------///////
const mainMenu = ["Burger", "Pizza", "Broast", "Haleem"];

const updatedMainMenu = [...mainMenu, "Biryani", "Zinger Burger"];

console.log("updatedMainMen", updatedMainMenu);

///////-------Spread Operator VS Destructuring--------///////
/*
Spread Operator is somewhat similar to Destructuring as it helps to take out the elements from arrays.
Spread operator takes out all the arrays and doesn't creates any new element as compared to destructuring. Used only where we have to write values of an array separated by comma
*/

///////-------Usecase # 1: Making Shallow copies of Arrays--------///////
const copyOfMainMenu = [...mainMenu];

///////-------Usecase # 2: Merging two arrays--------///////
const starterMenu = ["Soup", "Salad", "Green Tea", "Water"];

const completeMenu = [...starterMenu, ...mainMenu];

console.log("completeMenu", completeMenu);

///////-------Iterables--------///////
/*
Iterables are data types which could be iterated over. These include arrays, strings, maps, sets. NOT Objects
*/

///////-------Spread Operator on String data type--------///////
const str = "Shoaib";

//Uscase # 1: When Building an array

const strArr = [...str];
console.log(strArr);

//Uscase # 2: When Passing values to a function
console.log(...str);

// console.log(`${...str} Tahir`); //Error
// Multiple values separated by comma won't work because spread operator is only used when we have to create a new array or we have to pass value to a function

//Practical Example of Passing Values to a function

function orderBiryani(ing1, ing2, ing3) {
  console.log(`Your ${ing1} Biryani is ready with extra ${ing2} and ${ing3}`);
}
const ingredients = [
  prompt("Let's make Biryani for you, Please enter your ingredient # 1,"),
  prompt("Please enter your ingredient # 2"),
  prompt("Please enter your ingredient # 3"),
];

orderBiryani(...ingredients);

///////-------Spread Operator on Objects to Add new Values and create new objects --------///////

const newRestaurant = { founder: "Hanif Khan", foundedIn: 2000, ...restaurant };

///////-------Spread Operator on Objects to make shallow copies --------///////

const copyOfRestaurant = { ...restaurant };

copyOfRestaurant.name = "Karachi Haleeem";
console.log("restaurant", copyOfRestaurant.name); // Mazedar haleem
console.log("copy of restaurant", restaurant.name); //Karachi haleem
