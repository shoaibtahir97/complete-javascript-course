//Maps
/*
A Map is similar to object. The data is stored in key value pairs. But the difference is that the key can be of any data type. In objects the keys are only strings. But in maps they can objects, arrays or other maps
1. To add key value paits in a map we use .set() method. The first parameter is they key and second is its value. The method returns the map with updated value. 
2. The set method can be called as many times right after first is defined.
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
