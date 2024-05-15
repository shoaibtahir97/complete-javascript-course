"use strict";
// Regular VS Arrow Functions related to this keyword

// var firstName = "Shoaib"; //the variable is saved in the global window object.

const shoaib = {
  firstName: "Muhammad",
  birthYear: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.birthYear);
    const self = this;
    // Creating a function that will return a boolean if the person is millennial, inside the method
    // function isMillennial() {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    //   // console.log(this); // this keyword inside a normal function is undefined in strict mode.
    //   // console.log(this.birthYear >= 1981 && this.birthYear <= 1996); //therefore expression will give error. Two solutions to this problem 1. assigning this to an extra variable called 'self'. 2. Using an arrow function inside the method
    // }

    const isMillennial = () => {
      console.log(this); // this keyword inside a arrow function uses this keyword of its parent and therefore in this case the object this keyword is used.
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996); //the result will be calculated as the values are accessible through this keyword.
    };

    isMillennial();
  },

  greet: () => {
    // Never use an arrow function as a method, always use function expression
    console.log(this);
    console.log(`Hi ${this.firstName}`); // Arrow function does not have its own 'this' keyword instead it borrows 'this' keyword of its parent function. Since it does not have a parent function therefore it checks for the this keyword of window object. The window object does not have a variable by the name of firstName and it returns undefined. If a variable with firstName is created with var then it is saved as a property in global execution context and then if we access the variable using 'this', it will return the value of that variable, instead of the object value. This is a bug, and we should not create variables with var.
  },
};

// shoaib.greet();
shoaib.calcAge();

// Arguments keyword

// Only available in normal function

const addExpr = function (a, b) {
  console.log(arguments); // if the number of arguments are limited but if we pass more than expected, we can get the others through arguments keyword.
};

addExpr(2, 4);
addExpr(2, 4, 9, 4, 3);

const addArr = (a, b) => {
  console.log(arguments); // not defined
  return a + b;
};
addArr();
