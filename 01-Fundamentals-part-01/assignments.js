// //Values and Variables
const country = 'Pakistan';
const continent = 'Asia';
let population = 231400000;
33000000;
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
language = 'Urdu';
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

population > averagePopulation
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);
