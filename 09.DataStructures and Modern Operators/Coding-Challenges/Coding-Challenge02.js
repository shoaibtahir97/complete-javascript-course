/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK 
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Problem # 1
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal: ${i + 1}: ${game.scored[i]}`);
}
////--------OR-------/////
const goals = Object.entries(game.scored);
for (const [goal, goaler] of goals) {
  console.log(`Goal: ${Number(goal) + 1}: ${goaler}`);
}

// Problem # 2
const gameValues = Object.values(game.odds);
console.log(gameValues);

let average = 0;
for (let i = 0; i < gameValues.length; i++) {
  average += gameValues[i];
}
////--------OR-------/////

// Problem # 3
const entries = Object.entries(game.odds);

for (let [key, value] of entries) {
  console.log("Problem #3", `Odd of victory ${game[key] ?? "odd"}: ${value}`);
}

// Problem # 4
const scorers = {};

for (const scorer of game.scored) {
  if (scorers[scorer]) {
    scorers[scorer] += 1;
  } else {
    scorers[scorer] = 1;
  }
}
console.log("Problem #4", scorers);
// ---------------------------------------------------
// Jonas Solution
// Problem # 1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// Problem # 2
