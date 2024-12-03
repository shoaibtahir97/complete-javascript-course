// Call Method

// 1. The emirates object has a method of book which pushes the booking into the bookings array.

const emirates = {
  airline: "Emirates",
  iataCode: "EM",
  bookings: [],
  // book: function() {}
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`
    );
    this.bookings?.push({
      flight: `${this.iataCode}-${flightNum}`,
      passenger: passengerName,
    });
  },
};

emirates.book(763, "Muhammad Shoaib Tahir"); // A simple method

// 2. Here we have created another object but does not have the book method. Since the book method is same, we will not repeat the same method in another object.
const pia = {
  airline: "Pakistan International Airlines",
  iataCode: "PK",
  bookings: [],
};

const airBlue = {
  airline: "Air Blue",
  iataCode: "PA",
  bookings: [],
};

// 3. Make a copy function of the object method by assigning it to a variable. We have not called the function.
const bookFunc = emirates.book;

// 4. If we run this function it will throw error as it is not a method its a normal function and the this keyword of this function points to the window object.
bookFunc(821, "John Doe"); // DOES NOT WORK

// 5. So we have to make sure that whenever we call the bookFunc it should know the object whom it is referred to, in this case pia or emirates. There are three ways to do it. 1. call 2. apply 3. bind

// 6. The call method calls a method of an object, substituting another object for the current object. The first argument is the object in which we want to call the method and the second are list of arguments which are called on it.

bookFunc.call(pia, 123, "Sarah Williams"); //Using call method to call the method in pia object.

bookFunc.call(emirates, 872, "");
console.log("pia", pia);

bookFunc.call(airBlue, 170, "Muhammad Shoaib Tahir");
console.log(airBlue);

// Apply Method

const flightData = [170, "John Doe"];

// 1. Similar to call method but uses
bookFunc.apply(airBlue, flightData);

bookFunc.call(airBlue, ...flightData);

console.log(airBlue);
