// At method of array

/*
Returns the item located at the specified index.
*/
const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0)); //Returns first element
console.log(arr.at(-1)); //Returns second last element
console.log(arr); // Does not mutates the array
// Other ways to access last element of array

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr);
