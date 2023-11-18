/*
Nullish Coalescing Operator - ??
It works with nullish values (undefined OR null) and not falsy values(0 OR "")
*/

const restaurant = {};

restaurant.numGuests = 0;

//Short Circuiting OR Operator returns 10 as 0 is falsy value
const guest1 = restaurant.numGuests || 10;
console.log(guest1);

//Nullish Coalescing checks if the value is null then only it will return 10 else if the value is falsy then it will return the falsy value.
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2);
