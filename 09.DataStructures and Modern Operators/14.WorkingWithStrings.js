"use strict";
// --------------------------Part-01-----------------------------------------------

const airline = "PIA Pakistan International Airlines";

const plane = "B420";
// ----------------------------Length of an array-------------------------------------

//Finding length property
console.log(airline.length);

// ----------------------Indexing in string-------------------------------------------

// Accessing substring from string
console.log(airline[0]); //P
console.log(airline[1]); //I
console.log(airline[2]); //A
console.log("B291"[0]); //B

// -------------------------indexOf()----------------------------------------

// Finding Index of substring inside the array
console.log(airline.indexOf("I")); // 1;
console.log(airline.lastIndexOf("I")); // 13
console.log(airline.indexOf("pakistan")); // -1 if substring not found: indexOf is case sensitive

//-----------------------// Slice Method-------------------------------------------

// IndexOf is used to extract part of a string using slice method, as the slice method accepts index as arguments.
console.log(airline.slice(4)); // First value is inclusive. Slice methods returns the substring, and it does not change the original string because strings are primitives.
console.log(airline.slice(4, 12)); //Second value is exclusive.

// ---------------------Slicing the string using indexOf()--------------------------------------------

// If we don't know the index then we can use the indexOf() method to find the index of the value.
console.log(airline.slice(0, airline.indexOf(" "))); //Extracting the first word

console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Extracting the last word

console.log(airline.slice(-8)); // negative values slices from the end

console.log(airline.slice(0, -23));

// -----------------------Practice Challenge----------------------------------------

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const isMiddleSeat = seat.slice(-1);
  if (isMiddleSeat === "B" || isMiddleSeat === "E") return true;
  else return false;
};

console.log(checkMiddleSeat("11B")); //11 is row and ABC DEF are seats
console.log(checkMiddleSeat("23C"));
console.log(checkMiddleSeat("1E"));

// --------------------------------Part-02-----------------------------------------------

// ------------------------LowerCase and UpperCase----------------------------------

// Fix capitalization issue in name (My Approach)
const passenger = "jOnAS"; //Jonas

const first = passenger.slice(0, 1).toUpperCase();
const rest = passenger.slice(1).toLowerCase();

const newPassenger = first + rest;

console.log(newPassenger);
// Fix Capitalization issue in name (Jonas Approach)
const passenger2 = "sHoAIb";

const loweredPassenger = passenger2.toLowerCase();
const fixedPassenger = `${passenger2[0].toUpperCase()}${loweredPassenger.slice(
  1
)}`;
console.log("fixedPassenger", fixedPassenger);

// ------------------------Trim Spaces----------------------------------

// Comparing Email to check validity

const compareEmail = function (originalEmail, enteredEmail) {
  enteredEmail = enteredEmail.toLowerCase().trim();
  // In ES6 we now have trimStart and trimEnd to trim from start or end
  return originalEmail === enteredEmail;
};

console.log(compareEmail("hello@jonas.io", "  Hello@Jonas.Io \n"));

// ------------------------Replacing Characters----------------------------------

const convertCurrency = (GBCurr) => {
  const USCurr = GBCurr.replace(",", ".").replace("£", "$");
  return USCurr;
};

console.log(convertCurrency("288,97£"));

// Replace All
function replaceAll(str) {
  console.log(str.replace(/door/g, "gate"));
  console.log(str.replaceAll("door", "gate"));
}
replaceAll("All passengers come to boarding door 23. Boarding door 23!");

// ------------------------Boolean Methods----------------------------------
const newPlane = "Airbus A320neo";

console.log(newPlane.includes("320")); //true
console.log(newPlane.includes("Boeing")); // false
console.log(newPlane.endsWith("neo")); // true
console.log(newPlane.startsWith("Air")); //false

// Practice Exercise

const checkBaggage = (baggage) => {
  const loweredBaggage = baggage.toLowerCase();

  if (loweredBaggage.includes("knife") || loweredBaggage.includes("gun")) {
    console.log("You are not allowed to board");
  } else {
    console.log("welcome aboard");
  }
};
checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gUn for protection");

// --------------------------Part-03-----------------------------------------------

// ------------------------Split Method and Join Method----------------------------------

console.log("a+very+nice+string".split("+"));

const [firstName, middleName, lastName] = "Muhammad Shoaib Tahir".split(" ");

const newName = [firstName, middleName, lastName.toUpperCase()].join(" ");

console.log(newName);

// Practice Exercise
const capitalizeName = (name) => {
  const names = name.split(" ");
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// ----------Padding Method(Adding a number of characters in string until the string reaches a desired length)-------------

const message = " Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+")); //length of string after padding and character to add in padding.
console.log("jonas".padEnd(25, "-"));

// Practice Exercise

const maskCreditCard = function (number) {
  const str = number + "";
  const last4Digit = str.slice(-4);
  console.log(last4Digit.padStart(str.length, "*"));
};

maskCreditCard(1234567891011121);
maskCreditCard(1823091309108012);

// ----------Repeat Methods(repeats string)-------------

const message2 = "Bad weather... All Departures Delayed";

console.log(message2.repeat(5));

// Practice Exercise

const planesInLine = function (n) {
  console.log(`There are ${n} number of planes in queue ${"✈".repeat(n)}`);
};
planesInLine(7);

/*
More methods available at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/
