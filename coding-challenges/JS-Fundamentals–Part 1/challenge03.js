const team1 = 'Dolphins';
const team2 = 'Koalas';
//Data 01
// const dolphinsScore01 = 96;
// const dolphinsScore02 = 108;
// const dolphinsScore03 = 89;

// const koalasScore01 = 88;
// const koalasScore02 = 91;
// const koalasScore03 = 110;

//Data 02
const dolphinsScore01 = 97;
const dolphinsScore02 = 112;
const dolphinsScore03 = 101;

const koalasScore01 = 109;
const koalasScore02 = 95;
const koalasScore03 = 106;

const dolphinsAverageScore =
  (dolphinsScore01 + dolphinsScore02 + dolphinsScore03) / 3;

const koalasAverageScore = (koalasScore01 + koalasScore02 + koalasScore03) / 3;

const isDolphinWinner = dolphinsAverageScore > koalasAverageScore;

const minimumScore = 100;

console.log(
  `koalas average ${koalasAverageScore}, dolphins average ${dolphinsAverageScore}`
);

if (
  isDolphinWinner &&
  dolphinsAverageScore >= 100 &&
  koalasAverageScore !== dolphinsAverageScore
) {
  console.log(`The winner of is ${team1}`);
} else if (
  isDolphinWinner === false &&
  koalasAverageScore >= 100 &&
  koalasAverageScore !== dolphinsAverageScore
) {
  console.log(`The winner is ${team2}`);
} else if (
  dolphinsAverageScore >= 100 &&
  koalasAverageScore >= 100 &&
  koalasAverageScore === dolphinsAverageScore
) {
  console.log(`The match is a draw`);
} else {
  console.log(`There is no winner`);
}
