// Optional Chaining
/*
When we are accessing a property in a nested object  that does not exist than we get undefined. And if we try to access a property of that undefined we would get an error. In order to solve this error we would have to check if the previous property which is undefined exist. In a single nested object there is no problem but in deeply nested object it could get quite troublesome to check for each property. 
So in ES20 we have optional chaining operator. In Optional chaining if a certain property does not exist then undefined is returned immediately, and the error won't return. 
For Example:
restarant.openingHours.mon?.open
Optional chaining operator is places after the property which you think is undefined. So if the mon property exist(not null or undefined) then then only the open property will be read else it won't be read. Else undefined is returned immediately. 

Multiple Optional Chaining 
We can have multiple optional chaining if we want to check if the property exist or not.
*/

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
  order(starterIndex, mainIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  orderDelivery({ time = "12:00", location, starterIndex = 1, mainIndex = 3 }) {
    console.log(
      `Order Recieved, your order includes ${[
        this.starterMenu[starterIndex],
      ]} ${
        this.mainMenu[mainIndex]
      } which will delivered to ${location} at ${time}`
    );
  },
};

const days = ["mon", "tues", "wed", "thu", "fri", "sat", "sun"];

for (let day of days) {
  const openingHour = restaurant.openingHours?.[day]?.open ?? "closed";
  console.log(openingHour);
}

// Optional Chaining on Methods
// We can check for methods if they exist then only call that method else it would return not a function error
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderBiryani?.(0, 1) ?? "Method does not exist");

// Optional Chaining in Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io", age: 0 }];

console.log(users[0]?.email ?? "User array empty");

//Old Way to check for array length and get value
if (users.length > 0) console.log(users[0].name);
else console.log("User array empty");
