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

// --------------------------Part-02-----------------------------------------------

// Fix capitalization issue in name
const passenger = "jOnAS"; //Jonas

const first = passenger.slice(0, 1).toUpperCase();
const rest = passenger.slice(1).toLowerCase();

const newPassenger = first + rest;

console.log(newPassenger);
