// Simple Array Methods
/*
Arrays are objects thats why they have access to methods. They are used as tools in array
*/

let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2)); //Returns a copy of a section of an array.
console.log(arr.slice(2, 4)); // End parameter is excluded.
console.log(arr.slice(-2)); // Returns last 2 parameter of the array.
console.log(arr.slice(-1)); // Returns last parameter of the array.
console.log(arr.slice()); //Creates a shallow copy of the array.
console.log([...arr]); //Creates a shallow copy of the array.

// SPLICE (mutates original)
console.log(arr.splice(2)); //Returns the section of the array and also mutates the original array
console.log(arr); //Array part is lost
// Splice is mostly used to delete elements from the array.
arr.splice(-1); //Removes last element
console.log(arr);

// REVERSE (mutates original)
const arr2 = ["j", "i", "h", "g", "f"];
arr2.reverse();
console.log(arr2);
