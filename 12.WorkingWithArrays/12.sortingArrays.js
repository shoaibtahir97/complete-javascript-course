// Sorting Arrays

// Sorting array of strings is easy. Just need to call the sort method on array.

const employees = [
  "Bilal",
  "Shahab",
  "Shoaib",
  "Misha",
  "Komal",
  "Abdul Qadir",
];

console.log(employees.sort());

// Sorting an array of number does not return sorted array as the numbers are first converted into strings(words) and then they are sorted.

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// a and b are two consecutive numbers in the array.
// return  < 0 A, B (Keep order)
// return  > 0 B, A (Switch order)
// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
