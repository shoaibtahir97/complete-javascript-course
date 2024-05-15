"use strict";
// Global 'this' keyword
console.log(this); //points to global window object.

// 'this' => Simple function call
function calcAge(birthYear) {
  console.log(2024 - birthYear);
  console.log(this); // undefined in strict mode||points to window object in normal mode.
}

// 'this' => Arrow function
const calcStrLength = (str) => {
  console.log(str.length);
  console.log(this); // points to window object due to lexical this
};

// 'this'=> Object
const shoaib = {
  birthYear: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this?.birthYear); //this keyword points to jonas object because jonas is the object which is calling the calcAge function.
  },
};

calcAge(1997);
calcStrLength("Shoaib");
shoaib.calcAge();

// 'this' => Method Borrowing

const ramsha = {
  birthYear: 1999,
};

ramsha.calcAge = shoaib.calcAge; //Method borrowed from shoaib to ramsha

console.log(ramsha);
ramsha.calcAge(); // The this keyword will point to ramsha object instead of shoaib, because ramsha is the object which called the calcAge function.

//Taking the function out of the object
const func = shoaib.calcAge; // copied the value in variable.

console.log(func); //points to shoaib.calcAge
func(); //func is a regular function which is not attached to any object therefore func is undefined and returns error. Similar to calcAge at line # 6
