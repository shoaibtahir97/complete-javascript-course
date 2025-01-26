/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �
*/

const calcAverageHumanAge = (dogAges) =>
  Math.round(
    dogAges
      .map((dogAge) => (dogAge > 2 ? dogAge * 2 : 16 + dogAge * 4))
      .filter((humanAge) => humanAge >= 18)
      .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0)
  );

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
