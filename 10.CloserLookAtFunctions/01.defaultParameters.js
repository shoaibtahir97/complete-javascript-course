"use strict";

/*
1. Object Literal: If you are setting a variable as a value in object then no need to set its value, just adding the name of the variable will add the variable name as its key and value as value.
2. If a argument is not passed in a function parameter then the value is undefined for that argument.
3. Defining a default value to a parameter by adding value with equal to sign. In ES5 we had to check for a value with a OR operator, if the value existed then the value was shown else default value was shown as the value was undefined.
4. We can also do calculation in the parameter with values or numbers and also based on the previous parameter value. For example the price is the multiplication of price with number of passengers. The parameters must be set in sequence, if we access the value before then it will not work.
5. If you want to skip a argument from the function call then you can do it by passing undefined in place of it. Then the default parameter will be used.
*/

const bookings = [];

const createBooking = (
  flightNumber,
  numberOfPassengers = 100,
  price = 199 * numberOfPassengers
) => {
  // ES5 Syntax
  // numberOfPassengers = numberOfPassengers || 1;
  // price = price || 1;

  // Object Literal without value just variable name
  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };

  bookings.push(booking);
};

console.log("bookings", bookings);

createBooking("KR958");
createBooking("LH8473", 200);
createBooking("LH8473", undefined, 200);
