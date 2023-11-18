// Sets
/*
It is a collection of unique values. Cannot have any duplicates. 
To create a Set we use the new Set() method and inside we place an iterable. The most common iterable is an array. The Array can have mixed data types. 
If we console orderSet we would get each value only once. All the duplicates are removed. It looks similar to array. 
Sets are also iterables. 
Sets are still different from array, it has no duplicate values and the order of the set is irrelevant.
The set could also contain strings as strings are also iterable and it they have duplicate values then it will be discarded.
There are no indices in Sets and theres no way to retrieve element out of the set.
The main purpose of a Set is to find if a value exist in a Set or not.
*/

// Creating a Set from array

const orderSet = new Set([
  "Biryani",
  "Korma",
  "Nihari",
  "Biryani",
  "Korma",
  "Korma",
]);

console.log(orderSet);

//Creating  Set from string

const nameSet = new Set("ShoaibTahir");
console.log(nameSet);

// Set Methods
// 1. Size of Set

console.log(orderSet.size);
//Helpful for the chef to know the number of dishes that would be cooked.

// 2. Check if an element is present in the Set
//.has() method is similar to .includes method in array

console.log(orderSet.has("Biryani")); //true
console.log(orderSet.has("Bread")); //false

// 3. Adding elements in Set
//.add() Adds a new element at the end of the Set. If we add two similar values then the duplicate will be discarded

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");

//4. Delete elements in Set
// .delete
orderSet.delete("Korma");

// 5. Clear Set
// orderSet.clear();

console.log(orderSet);

// 6. Looping over Sets

for (const order of orderSet) console.log(order);

//7. Remove duplicate values from Arrays
const restaurantStaff = ["Waiter", "Chef", "Waiter", "Chef", "Manager"];

const StaffPositions = new Set(restaurantStaff); //Array to Set
console.log(StaffPositions);

const setToArray = [...StaffPositions]; //Set to Array
console.log(setToArray);
