"use strict";
/*
Passing arguments to functions can be of two types, primitive and reference type. If a argument is primitive then the value updated in the function will have no effect the variable which was defined out of the function. As it creates a copy of it. But if an argument is a reference type like a object then the value will be changes as the reference of both the objects will be pointing to the same data reference in the heap.  
*/

const flight = "KH491";
const shoaib = {
  name: "Muhammad Shoaib Tahir",
  passport: 29401234123,
};

function checkIn(flightNum, passenger) {
  flightNum = "PK891";
  passenger.name = `Mr. ${passenger?.name}`;
}

checkIn(flight, shoaib);
console.log(flight, shoaib);
