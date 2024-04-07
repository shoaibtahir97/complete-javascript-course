//1. Function Declaration
function sum01(a, b) {
  a + b;
}

//2. Function Expression
const sum02 = function (a, b) {
  a + b;
};

// 3. Arrow Functions
const sum03 = (a, b) => {
  return a + b;
};

// 3.1 Implicit Return Syntax of Arrow Function for Single Statement
const sum04 = (a, b) => a + b;

const getLength = (str) => str.length;

const getUpperCase = (str) => str.toUpperCase();

// 3.2 Arguments Object: Function Declaration and Function Expression

/*
If you don't know the number of arguments that will be passed in the function arguments, then you can use arguments object, it will contain all the arguments that are passed in a function. Arguments object is only available in function declaration and function expression, it is not available in arrow function  
*/

function sumNum() {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumNum(1, 24, 21, 31, 2, 21));

// This Keyword in Arrow Function VS Function Expression

/*
1. "this" keyword when used inside a method of object contains that object
2. If we use "this" inside the anonymous function then "this" will return the global window object. This is because the anonymous function does not have any name therefore it refers to the window object.
SOLUTION: 
1. Using bind() method and passing the this keyword in that function.  
2. Saving the this in a variable and then using that variable instead of this
3. Using arrow function, since arrow function does not have its own "this" keyword it will look up in the scope chain and return the "this" keyword of the object in which it is defined.

3. Similarly if we add an event listener on the button click then we should use function expression as it would return the button element. If we use the arrow function then it would return the window object as it does not have "this" keyword of its own. 
*/

const muslimCountries = {
  asia: ["Pakistan", "Iran", "Afganistan"],
  displayCountry: function () {
    console.log(this);
    setTimeout(function () {
      console.log("window object", this); //<--- global window object
    }, 1000);
    setTimeout(
      function () {
        console.log("bind", this);
      }.bind(this) //<--- muslimCountries "this". Using bind method
    );
    const self = this;
    setTimeout(function () {
      console.log("using variable to save this", self);
    });
    setTimeout(() => {
      console.log("arrow function", this);
    });
  },
};

// muslimCountries.displayCountry();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log(this);
});
