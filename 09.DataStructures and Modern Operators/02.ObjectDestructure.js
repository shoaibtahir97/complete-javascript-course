const restaurant = {
  name: "Jawed Nihari",
  location: "F.B Area Block 17, Dastaghir, Karachi",
  categories: ["Nihari", "Paye", "Salad", "Roti"],
  starterMenu: ["Salad", "Raita"],
  mainMenu: ["Single Nihari", "Maghaz Nihari", "Nalli Nihari", "Milky Roti"],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  orderDelivery: function ({
    time = "12:00",
    location,
    starterIndex = 1,
    mainIndex = 3,
  }) {
    console.log(
      `Order Recieved, your order includes ${[
        this.starterMenu[starterIndex],
      ]} ${
        this.mainMenu[mainIndex]
      } which will delivered to ${location} at ${time}`
    );
  },
};

///////-------Object Destructuring--------///////
const { name, categories, openingHours } = restaurant;

///////-------Renaming Destructured Values--------///////
const { name: resName, categories: tags, openingHours: hours } = restaurant;

///////-------Destructuring Object with Default Value--------///////
const { menu = [], starterMenu } = restaurant; //in this object menu does not exist so we set the  value as empty array

///////-------Mutating Variables with Object Values--------///////
let a = 123;
let b = 480;
const obj = { a: 21, b: 39, c: 90 };
({ a, b } = obj); //The values of 'a' and 'b' were replaced by the obj values of 'a' and 'b'. Basically re assigned the variable values with the ones present in object
// console.log(a, b);

///////-------Destructuring Nested Objects--------///////
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close);

///////-------Destructuring Objects in Function Arguments--------///////
restaurant.orderDelivery({
  location: "Alnoor Society",
  mainIndex: 2,
});
