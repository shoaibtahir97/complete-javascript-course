//Values and Variables
const country = 'Pakistan';
const continent = "Asia";
let population = 243000000; 

/*
console.log('country: ',country);
console.log('continent: ',continent);
console.log('population: ',population);
*/

// Data Types 

let isIsland = false;
let language;
/*
console.log(typeof isIsland)
console.log(typeof language)
console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
*/

// let, const and var
language = "Urdu";
console.log(language)

//Basic Operators
//Split the population in half
population /= 2;
console.log('population after division=',population)

//Increase population by 1
population++;
console.log('population after increment',population)

//Compare population with Finland
const finlandPopulation = 6000000;
console.log(population > finlandPopulation)

//Compare with average population
const averagePopulation = 330000000;
console.log(population < averagePopulation)