const movements = [3000, 200, 450, -400, -650, -130, 70, 1300];

const maxMovement = movements.reduce((acc, cur) => {
  if (cur > acc) {
    return cur;
  }
  return acc;
}, movements[0]);

console.log(maxMovement);
// To return the max movement value we can start adding the

const minMovement = movements.reduce((acc, cur) => {
  if (acc > cur) { 
    return cur;
  } else {
    return acc;
  }
}, movements[0]);
console.log(minMovement);
