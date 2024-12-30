// Bind Method
// The bind method is similar to call and apply but it does not immediately call the function. It returns a new function where the this keyword is bound to the object that we pass to the bind method.
const airBlue = {
  airline: "Air Blue",
  iataCode: "PA",
  bookings: [],
  book(flightNum, passengerName) {
    this.bookings.push({
      flight: `${this.iataCode}-${flightNum}`,
      passengerName,
    });
  },
};

const sereneAir = {
  airline: "Serene Air",
  iataCode: "SA",
  bookings: [],
};

const emirates = {
  airline: "Emirates",
  iataCode: "EM",
  bookings: [],
};

// 1. First we assigned the book method to a variable. This is not a method but a normal function.
const bookFunc = airBlue.book;

// 2. We have to bind the bookFunc to the airBlue object. This will create a new function where the this keyword will always point to the airBlue object.
const bookPA = bookFunc.bind(airBlue);
const bookSA = bookFunc.bind(sereneAir);
const bookEM = bookFunc.bind(emirates);

bookPA(170, "Muhammad Shoaib Tahir");
bookSA(171, "Muhammad Shoaib Tahir");
bookEM(172, "John Doe");

// 3. We can also pass the arguments to the bind method. The first argument is always the object name of the this keyword and the rest of the arguments are the arguments of the function.
const bookPA170 = bookFunc.bind(airBlue, 170);

// 3.3 So the first argument which is flightNum is already set to 170 and we only need to pass the passengerName.
bookPA170("Samina Saqi");
// 3.2 This is called partial application. We are partially applying the function. We are setting some of the arguments before the function is called.
console.log(airBlue);

// 4. Using Bind method in Event Listeners
airBlue.planes = 300;
airBlue.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// 4.1 The this keyword in the event listener points to the element on which the event is called. So we have to bind the this keyword to the airBlue object.
// document.getElementById("btn").addEventListener("click", airBlue.buyPlane);

document
  .getElementById("btn")
  .addEventListener("click", airBlue.buyPlane.bind(airBlue));

// 5. Partial Application
// 5.1 We can also use the bind method to create a function where some of the arguments are already set.

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// // Using Bind method to partially set the value of rate to 0.23 and then calling the addVAT function to just pass the value. In this case we don't have the this keyword so set to null.
// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value+value * 0.23
// console.log(addVAT(100));

// Function returning other functions
// const addTaxV2 = function (value) {
//   return function (vat) {
//     return value + value * vat;
//   };
// };

// // const addVatV2 = addTaxV2(100);

// // console.log(addVatV2(0.23));

// console.log(addTaxV2(100)(0.23));

const addTaxV2 = (value) => (vat) => value + value * vat;

console.log(addTaxV2(100)(0.23));
