// Immediately invoked function expressions

/*
A function that is executed only once and not again. It is used in async await. In this approach we create a function and execute that function only once.
*/

const runOnce = function () {
  console.log("This can be executed again");
};

runOnce();

// We can execute this function like above but the same function can be executed later in the program.
runOnce();

// In this case we want to execute the function right after it is created.

// IIFE
(function () {
  console.log("This will execute immediately");
})();

// Wrapping a function expression inside the parenthesis will convert the function into an expression. After the parenthesis we call the function immediately.

(() => console.log("This will execute immediately"))();
