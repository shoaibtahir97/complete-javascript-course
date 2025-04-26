// Some Method

/*
Some method accepts a callback function and returns boolean based on the condition provided to it. If the condition is true for a single element then true is returned else false.
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.some((mov) => mov > 0)); // true
console.log(movements.some((mov) => mov > 5000)); // false
console.log(movements.some((mov) => mov === -130)); // true

// Every Method accepts a callback function and returns boolean based on the condition provided to it. If the condition is true for a single element then true is returned else false.
console.log(movements.every((mov) => mov > 0)); // false
