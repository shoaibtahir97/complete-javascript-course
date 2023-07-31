"use-strict";
/*
//Selecting an element and reading its textContent
console.log(document.querySelector(".message").textContent);

//Changing the textContent of an element
console.log((document.querySelector(".number").textContent = 13));
console.log((document.querySelector(".score").textContent = 9));

//Changing the value of an input field
document.querySelector(".guess").value = 18;

//Accessing the value of an input field
console.log(document.querySelector(".guess").value);
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
let myScore = 20;
const message = document.querySelector(".message");
const number = document.querySelector(".number");
// number.textContent = secretNum;
const score = document.querySelector(".score").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const guessedNum = Number(document.querySelector(".guess").value);

  if (!guessedNum) {
    message.textContent = "No Number!";
  } else if (guessedNum > secretNum) {
    if (myScore > 1) {
      message.textContent = "Too High!";
      myScore = myScore - 1;
      document.querySelector(".score").textContent = myScore;
    } else {
      message.textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessedNum < secretNum) {
    if (myScore > 1) {
      message.textContent = "Too Low!";
      myScore = myScore - 1;
      document.querySelector(".score").textContent = myScore;
    } else {
      message.textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    message.textContent = "Correct Answer";
    number.textContent = secretNum;
    if (myScore > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = myScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  myScore = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = myScore;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
