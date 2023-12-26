//Maps
/*
A Map is similar to object. The data is stored in key value pairs. But the difference is that the key can be of any data type. In objects the keys are only strings. But in maps they can objects, arrays or other maps
1. To add key value pairs in a map we use .set() method. The first parameter is the key and second is its value. The method returns the map with updated value. 
2. Chaining the set method. The set method can be called as many times right after first is defined. No need to call it seperately. This is because the set method returns the updated map to which we can call the set method again. 
3. To get the values from the map we use .get() method. It accepts a parameter which is the key. While accessing the values data type of key is important.
4. To check if a value exist in map we can use .has() method. It accepts the key. It returns a boolean.
5. To delete a value from a map use .delete(). It accepts the key of the value which you want to delete.
6. To clear the entire map use .clear() method.
*/

const restaurant = new Map();
restaurant.set("name", "Mazaidar Haleem");
restaurant.set(1, "Samanabad");
restaurant.set(2, "Bandar Road");
restaurant
  .set("categories", [
    "Fast Food",
    "Barbq",
    "Continental",
    "Thai",
    "Chineese",
    "Italian",
  ])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are close");

let maps;

maps = restaurant.get(1);

const currTime = 7;
maps = restaurant.get(
  currTime >= restaurant.get("open") && currTime <= restaurant.get("close")
);

console.log(maps);
