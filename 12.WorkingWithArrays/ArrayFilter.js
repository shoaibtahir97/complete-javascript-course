// Array Filter Method
/*
Filter always returns an array, if the value matches the condition(boolean) the value is returned inside the array, if no matching elements then empty array is returned.
*/
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const deposits = movements.filter((mov) => {
  return mov > 0;
});

const withdrawal = movements.filter((mov) => mov < 0);

const withdrawalFor = [];

for (const mov of movements)
  if (mov < 0) {
    withdrawalFor.push(mov);
  }
