///////-------Short Circuiting - OR --------///////
/*Short Circuiting in OR operator means that if the first value is a truthy value, then the OR operator will immediately return the first value, else if the first value is false then it will check for all the next values and return the true value.
 */

console.log(3 || "Shoaib");
//Here 3 is a truty value so it will be returned

/*
1. Logical operators can use any data type
2. They can return any data type
3. They can do short circuit evaluation
*/

console.log("" || "Jonas"); // Since Jonas is a truthy value and "" is a falsy value so "Jonas" is returned
console.log(true || 0); // true is returned as it is first and also 0 is a falsy value.
console.log(undefined || null); //undefined is a falsy value
console.log(undefined || 0 || "" || "Hello" || 23 || null); // returns Hello as it is the first truthy value

/*
The OR Operator returns true if any of the values is true, as it checks the values from left to right
*/

///////-------Practical Example--------///////
// using short circuiting in place of ternary operator.
//Both of these operators won't work if the number of guest is 0. As 0 is a falsy value so the default value 10 will be returned.
const restaurant = {};

restaurant.numGuest = 24;
//Ternary Operator
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

//Short Circuiting
const guest2 = restaurant.numeGuest || 10;
console.log(guest2);

///////-------Short Circuiting - AND --------///////
/*
Short Circuiting in AND is opposite of OR. If it finds a falsy value then returns the falsy value, irrespective of its position or if any truthy value is present. If all the values are truthy then the evaluation continues and the last value is returned.

*/
console.log(0 && "Shoaib"); //Result = 0
console.log(90 && ""); //Result = ""
console.log(90 && "Shoaib"); //Result = "Shoaib"

console.log("Shoaib" && 26 && null && true);

// Practical Example
//Checking if the orderPizza method exist, if it exists then call the method.
// Using IF Statement
if (restaurant.orderNihari) {
  restaurant.orderNihari("Maghaz", "Nalli");
}
//Using AND Short Circuiting
restaurant.orderNihari && restaurant.orderNihari("Nalli", "Salad");
console.log(resta);
