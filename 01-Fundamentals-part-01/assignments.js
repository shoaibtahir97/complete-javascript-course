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
function percentageOfWorld1(population) {
  const percentageInWorld = (population / 7900) * 100;
  return percentageInWorld.toFixed(1);
}

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

// const percentageOfWorld3 = (population) =>
//   (percentage = (population / 7900) * 100);

// console.log(percentageOfWorld3(population));

//LECTURE: Functions Calling Other Functions

// const describePopulation = (country, population) => {
//   const percentageInWorld = percentageOfWorld3(population);
//   return `${country} has  ${population} million people which is about ${percentageInWorld.toFixed(
//     2
//   )}% of the world.`;
// };

// console.log(describePopulation(country, population));

//LECTURE: Functions Calling Other Functions

// const fruitPieces = (fruit) => {
//   return fruit * 4;
// };

// const fruitProcessor = (apple, mango) => {
//   const applePieces = fruitPieces(apple);
//   const mangoPieces = fruitPieces(mango);
//   return `Juice with ${applePieces} apple and ${mangoPieces} mango pieces is ready`;
// };

// console.log(fruitProcessor(3, 2));

//Lecture: Arrays

// const calcAge = (birthYear) => 2023 - birthYear;

// const years = [1997, 2010, 2018, 1970, 1976];

// console.log(calcAge(years[0]));

// const birthYear = [calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(birthYear);

//LECTURE: Introduction to Arrays

// const populations = [231, 1412, 1408, 339];

// if (populations.length == 4) {
//   console.log("The populations array has four elements ");
// } else {
//   console.log("The array do not contain four elements");
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[populations.length - 1]),
// ];
// console.log(percentages);

//LECTURE: Basic Array Operations (Methods)

// const neighbors = ["Afghanistan", "Iran", "India", "China"];

// console.log(neighbors);

// neighbors.push("Utopia");

// console.log(neighbors);

// neighbors.pop();

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central european country 😅");
// }

// const chinaIndex = neighbors.indexOf("China");
// neighbors[chinaIndex] = "Peoples Republic of China";
// console.log(neighbors);

//LECTURE: Introduction to Objects

// const myCountry = {
//   country: "Pakistan",
//   capital: capitalCity,
//   language: language,
//   population: population,
//   neighbors: ["Iran", "Afghanistan", "China", "India"],
// };

//Lecture: Dot vs Bracket Notation

const getCountryDescription = () => {
  return `${myCountry.country} has ${myCountry["population"] - 2}, ${
    myCountry.neighbors.length
  } neighboring countries and a capital called ${myCountry.capital}.`;
};

// console.log(getCountryDescription());

//Lecture: Object Methods

const person = {
  name: "Shoaib",
  birthYear: 1997,
  occupation: "Software Engineer",
  hasDriversLicense: false,
  calAge: function () {
    return (this.age = 2023 - this.birthYear);
  },
  getPersonData: function () {
    this.introduction = `${this.name} is a ${this.calAge()} years old ${
      this.occupation
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    // return this.introduction;
  },
};

person.getPersonData();

// console.log(person.introduction);

//Assignment Object Methods:

const myCountry = {
  country: "Pakistan",
  capital: capitalCity,
  language: language,
  population: population,
  neighbors: [],
  describe: function () {
    this.description = `${this.country} has a population of ${this.population}, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}. The people of${this.country} speak ${this.language}`;
  },
  checkIsIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsIsland();

// console.log(myCountry.isIsland);

//Assignment: Looping through Arrays

const birthYears = [1991, 1986, 1998, 2009, 2017];

const agesInYears = new Array();

const getAges = (birthYears) => {
  for (let i = 0; i < birthYears.length; i++) {
    agesInYears.push(2023 - birthYears[i]);
  }
};

getAges(birthYears);
// console.log(birthYears);
// console.log(agesInYears);

//LECTURE: Iteration: The for Loop

// for (let i = 0; i <= 50; i++) {
//   console.log(`Vote number ${i} is currently voting.`);
// }

//LECTURE: LOOPING ARRAYS, CONTINUE, BREAK

const populations = [231, 1412, 1408, 339];

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages2.push(percentage);
  break;
}

// console.log(percentages2);

//LECTURE: Looping Backwards and Loops in Loops

const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  if (listOfNeighbors[i].length > 1) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
      console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
  }
}

//Lecture: The while loop

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  let perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}

console.log(percentages3);
