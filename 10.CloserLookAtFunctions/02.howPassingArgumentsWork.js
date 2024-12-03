"use strict";
/*
Passing arguments to functions can be of two types, primitive and reference type. If an argument is primitive then the value updated in the function will have no effect to the variable which was defined out of the function. As it creates a copy of it. But if an argument is a reference type like an object then the value of the object will be changed as the reference of both the objects will be pointing to the same data reference in the heap.  
*/

const flight = "KH491";

const shoaib = {
  name: "Muhammad Shoaib Tahir",
  passport: 29401234123,
};

function checkIn(flightNum, passenger) {
  flightNum = "PK891"; //changing the flightNum will not have effect on flight variable
  passenger.name = `Mr. ${passenger?.name}`; // changing the name property of the object will have an effect update the original object.

  if (passenger.passport === 29401234123) {
    alert("Checked In");
  } else {
    alert("Invalid Passport");
  }
}

// checkIn(flight, shoaib);
console.log(flight, shoaib);
console.log(flight);
console.log(shoaib);

const changePassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 100000000);
};

changePassport(shoaib);
checkIn(flight, shoaib);
console.log(flight, shoaib);

let age = 27; //---> points to an address in memory
const newAge = age; //A new Memory address alloted to it.
age = 28; // The same memory address but the value was changed.

console.log("age", age);
console.log("newAge", newAge);

const abc = {
  name: "John",
  number: 8102309,
};

const person = abc;

person.name = "Doe";
console.log("abc", abc);
console.log("person", person);
