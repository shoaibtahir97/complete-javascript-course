"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName); // 1. Scope borrowing variable from global scope as it is not available in scope.

  function printAge() {
    let output = `${firstName}, your'e birth year is ${birthYear}, you are ${age} years old.`;

    // 2. age and birthYear are not defined in the scope and are present in parent scope so the scope will look up in its parent scope to access them. Also, the birthYear is parameter and behaves like a variable.

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = false;

      //CREATING NEW VARIABLE WITH SAME NAME AS OUTER SCOPE. if a variable is present in a block then the scope will never look up in the chain to find the variable. It will use that variable.
      const firstName = "Muhammad";

      // REASSIGNING OUTER SCOPE'S VARIABLE,
      output = "NEW OUTPUT";

      const str = `Oh and you're a millennial, ${firstName}`;

      // In ES6 strict mode functions are also blocked scope, which means they can only be called within the block,
      function add(a, b) {
        return a + b;
      }

      console.log(output);
    }
    console.log(millennial); // Var variable can be accessed outside the scope as it is function scope.

    // console.log(str); //const variable cannot be accessed outside the scope.

    // add(2, 3);
  }

  // console.log(millennial); As far is functional scope therefore it cannot be accessed outside the function it is defined.

  printAge();

  return age;
}

const firstName = "Shoaib";
// The function is called after the firstName is defined therefore it can access the firstName variable in the function.
calcAge(1996);

// console.log(age); // The age variable is defined in he calcAge function and is not available in global scope, therefore it will give Reference Error. Same goes for the printAge function
// printAge();
