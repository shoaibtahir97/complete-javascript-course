// Logical Assignment Operator - Using Logical AND OR Nullish Operator with assignment operator

const rest1 = {
  name: "Kababjees",
  numGuest: 0,
};

const rest2 = {
  name: "Saltanat",
  ownerName: "Fouji Fertilizer",
};

//Short Circuiting Operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

//Logical Assignment Operator
// rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

//Nullish Coalesing Assignment Operator if a value is 0
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//If owner name is mentioned then make it anonymous
// rest1.ownerName = rest1.ownerName && "Anonymous";
// rest2.ownerName = rest2.ownerName && "Anonymous";
rest1.ownerName &&= "Anonymous";
rest2.ownerName &&= "Anonymous";

console.log(rest1, rest2);
