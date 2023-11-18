"use-strict";

//Declaring Initial Values
const playersScore = [0, 0];

let currentPlayer = 0;

let currentScore = 0;

//Getting Elements
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceElem = document.querySelector(".dice");
const score0Elem = document.querySelector("#score--0");
const score1Elem = document.querySelector("#score--1");
const player0Elem = document.querySelector(".player--0");
const player1Elem = document.querySelector(".player--1");

//Setting Default hidden to dice
diceElem.classList.add("hidden");

score0Elem.textContent = playersScore[0];
score1Elem.textContent = playersScore[1];
let playing = true;
//Swtich Player
const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0Elem.classList.toggle("player--active");
  player1Elem.classList.toggle("player--active");
};

//on Event Listener creating random number and displaying picture of dice
btnRoll.addEventListener("click", () => {
  if (playing) {
    //Generate Random Number
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElem.classList.remove("hidden");

    //Showing image of dice depending on random number generated
    diceElem.src = `./assets/dice-${dice}.png`;

    if (dice !== 1) {
      //Store dice result in current score
      currentScore += dice;

      //Display Current Score depending on current player on ui
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      //Active Player on UI
      // playersScore[currentPlayer] += currentScore;
      // document.querySelector(`#score--${currentPlayer}`).textContent =
      //   playersScore[currentPlayer];
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  playersScore[currentPlayer] += currentScore;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    playersScore[currentPlayer];
  switchPlayer();
});

btnNew.addEventListener("click", () => {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove("player--active");
  currentPlayer = 0;
  currentScore = 0;
  playersScore[0] = 0;
  playersScore[1] = 0;
  score0Elem.textContent = playersScore[0];
  score1Elem.textContent = playersScore[1];
  document.querySelector(`#current--0`).textContent = currentScore;
  document.querySelector(`#current--1`).textContent = currentScore;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add("player--active");
});
