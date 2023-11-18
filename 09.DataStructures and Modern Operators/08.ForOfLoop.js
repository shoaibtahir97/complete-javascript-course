/*
For of Loop - Introduced in ES6
*/

const menu = [
  "Biryani",
  "Haleem",
  "Cholay",
  "Nihari",
  "Qorma",
  "Daal Chawal",
  "Daal Fry",
];
//Returning the items
for (const item of menu) console.log(item);

//Returning the items along with index
for (const item of menu.entries()) console.log(item);

//Returning the items in a more elegant way
for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

// Destructuring the items instead of accessing values
for (const [index, item] of menu.entries())
  console.log(`${index + 1}: ${item}`);

/*Entries
Entries is a method which returns the elements along with index number.
*/
