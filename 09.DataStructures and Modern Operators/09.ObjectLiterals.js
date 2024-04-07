/*
Enhanced Object Literals
Any object that is written literally is called object literal.
ES6 has introduced 3 ways to write object literals like this.
1. In order to use an object into another one like using openingHours in restaurant
*/

const openingHours = {
  thu: {
    open: 12,
    close: 12,
  },
  fri: {
    open: 2,
    close: 12,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "VIP Popsicle",
  location: "Mashrique Center",
  // openingHours:openingHours,
  //1. If we want to have the opening hours object inside the restaurant we can pass it directly without creating any property or value
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //2. If we want to create a function method then we need to write as a property and assign a function to it which has the logic but in ES6 object literal we can remove the function keyword and do the same thing
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const days = ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"];

const openingHoursUpdated = {
  //3.We can compute property names by enclosing them in square brackets
  [days[3]]: {
    open: 12,
    close: 12,
  },
  [days[4]]: {
    open: 2,
    close: 12,
  },
  [`day-${days[6 - 1]}`]: {
    open: 0,
    close: 24,
  },
};
console.log(openingHoursUpdated);
