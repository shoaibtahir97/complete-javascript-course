// Variables

console.log(me); //undefined
// console.log(job); //cannot use before initialization
// console.log(year); //cannot use before initialization

var me = "jonas";
let job = "teacher";
const year = 1997;

//Functions

console.log(addDecl(2, 3)); //Func Declaration can be accessed before initialization
// console.log(addExpr(2, 3)); // Similar to let and const variables
// console.log(addArrow(2, 3)); // Similar to let and const variables

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = () => a + b;

// Defining Expression and Arrow Function with var

// console.log(addExprVar(2, 3)); // addExprVar is not a function
// console.log(addArrowVar(2, 3)); // addExprVar is not a function

var addExprVar = function (a, b) {
  return a + b;
};

var addArrowVar = () => a + b;
// When using the function with var keyword we get a different error, because the function is undefined, similar to variables defined with var.

// Example of Danger of using var and hoisting in real world project.

console.log(cartProducts); // undefined
if (!cartProducts) ClearCart(); //Function will execute

var cartProducts = 10;

function ClearCart() {
  console.log("Cart is clear successfully");
}

/*
Best Practices of using hoisting and var
1. Don't use var 
2. Use Const when you don't want to change the variable and Let when you want to change 
3. Declare variables at top of each scope
4. Declare all your functions first and then use them after declaration, even function declaration. 
*/

// Example of variable types with global window object

var x = 1; //Var object is defined in global window object as key value pair
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
