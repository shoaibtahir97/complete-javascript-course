/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
*/

//My Logic

// const calAverage = (score_1, score_2, score_3, score_4, score_5, score_6) => {
//   const avgDolphins = (score_1 + score_2 + score_3) / 3;
//   const avgKoalas = (score_4 + score_5 + score_6) / 3;
//   checkWinner(avgDolphins, avgKoalas);
// };

// const checkWinner = (avgDolphins, avgKoalas) => {
//   console.log(avgDolphins, avgKoalas);
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins");
//   }
// };

// calAverage(85, 54, 41, 23, 34, 27);

//Jonas Logic
const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calAverage(85, 54, 41);
const avgKoalas = calAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(avgDolphins, avgKoalas);
