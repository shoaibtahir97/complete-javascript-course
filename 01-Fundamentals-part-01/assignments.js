// //Values and Variables
const country = "Pakistan";
const continent = "Asia";
let population = 231;
// 33000000;
// /*
// console.log('country: ',country);
// console.log('continent: ',continent);
// console.log('population: ',population);
// */

// // Data Types

let isIsland = false;
let language;
// /*
// console.log(typeof isIsland)
// console.log(typeof language)
// console.log(typeof country)
// console.log(typeof continent)
// console.log(typeof population)
// */

// // let, const and var
language = "Urdu";
// console.log(language);

// //Basic Operators

// //Split the population in half
// population /= 2;
// console.log('population after division=', population);

// //Increase population by 1
// population++;
// console.log('population after increment', population);

// //Compare population with Finland
// const finlandPopulation = 6000000;
// console.log(population > finlandPopulation);

// //Compare with average population
const averagePopulation = 33000000;
// console.log(population < averagePopulation);

// //Description
// const description =
//   'Portugal is in Europe and its 11 million people speak Portuguese.';

// //Description
// const descriptionOfPakistan = `${country} is in ${continent} and its ${
//   population - 94000000
// } speak ${language} `;

// console.log(descriptionOfPakistan);

// //LECTURE: Taking Decisions: if / else Statements
// if (population > averagePopulation) {
//   console.log(`${country} population is above average`);
// } else {
//   console.log(`${country} population is below average`);
// }

// //LECTURE: Type Conversion and Coercion

// const result = '9' - '5'; // 4
// const result1 = '19 ' - '13' + '17'; //617
// const result2 = '19' - '13' + 17; //23
// const result3 = '123' < 57; //true (x)
// const result4 = 5 + 6 + '4' + 9 - 4 - 2; //1143
// console.log('result', result4);

//LECTURE: Equality Operators: == vs. ===

// const numNeighbors = Number(
//   prompt('How many neighbor countries does your country have?')
// );

// if (numNeighbors === 1) {
//   console.log('Only 1 border');
// } else if (numNeighbors > 1) {
//   console.log('More than 1 border in case');
// } else {
//   console.log('No borders');
// }

//LECTURE: Logical Operators

// if (language == 'English' && population < 50000000 && isIsland === false) {
//   console.log(`Sarah should live in ${country}`);
// } else {
//   console.log(`${country} does not meet her criteria`);
// }

//LECTURE: The switch Statement

// switch (language) {
//   case 'Chinese':
//   case 'Mandarin':
//     console.log('MOST number of native speaker');
//     break;
//   case 'Spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'English':
//     console.log('3rd place');
//     break;
//   case 'Hindi':
//     console.log('Number 4');
//     break;
//   case 'Arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too 😐');
//     break;
// }

//LECTURE: The Conditional (Ternary) Operator

// population > averagePopulation
//   ? console.log(`${country}'s population is above average`)
//   : console.log(`${country}'s population is below average`);

const capitalCity = "Islamabad";

//LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//   const descriptionOfCountry = `${country} has ${population} people and its capital is ${capitalCity}`;
//   return descriptionOfCountry;
// }

// const result = describeCountry(country, population, capitalCity);
// console.log(result);

// LECTURE: Function Declaration VS Expression

//Function Declaration
// function percentageOfWorld1(population) {
//   const percentageInWorld = (population / 7900) * 100;
//   return percentageInWorld.toFixed(1);
// }

// const result11 = percentageOfWorld1(1412);
// const result12 = percentageOfWorld1(1408);
// const result13 = percentageOfWorld1(339);
// console.log(`${result11}%`);
// console.log(`${result12}%`);
// console.log(`${result13}%`);

// //Function Expression
// const percentageOfWorld2 = function (population) {
//   const percentage = (population / 7900) * 100;
//   return percentage.toFixed(1);
// };

// const result21 = percentageOfWorld2(276);
// const result22 = percentageOfWorld2(236);
// const result23 = percentageOfWorld2(219);
// console.log(`${result21}%`);
// console.log(`${result22}%`);
// console.log(`${result23}%`);

//Lecture: Arrow Function

const percentageOfWorld3 = (population) =>
  (percentage = (population / 7900) * 100);

// console.log(percentageOfWorld3(population));

//LECTURE: Functions Calling Other Functions

const describePopulation = (country, population) => {
  const percentageInWorld = percentageOfWorld3(population);
  return `${country} has  ${population} million people which is about ${percentageInWorld.toFixed(
    2
  )}% of the world.`;
};

console.log(describePopulation(country, population));

//LECTURE: Functions Calling Other Functions

const fruitPieces = (fruit) => {
  return fruit * 4;
};

const fruitProcessor = (apple, mango) => {
  const applePieces = fruitPieces(apple);
  const mangoPieces = fruitPieces(mango);
  return `Juice with ${applePieces} apple and ${mangoPieces} mango pieces is ready`;
};

console.log(fruitProcessor(3, 2));
