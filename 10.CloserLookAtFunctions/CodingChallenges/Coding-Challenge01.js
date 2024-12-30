// My Solutions

// const poll = {
//   question: "What is your favorite programming language",
//   options: [
//     "0: JavaScript",
//     "1: Python",
//     "2: Rust",
//     "3: C++",
//     "(Write option number)",
//   ],
//   answers: new Array(4).fill(0),
// };

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];

// poll.registerNewAnswer = function () {
//   const answer = prompt(`${this.question} \n ${this.options.join("\n")}`);

//   if (answer === "") {
//     alert("Number is required");
//   } else if (isNaN(answer)) {
//     alert("Must input numbers");
//   } else if (Number(answer) < 0 || Number(answer) > 4) {
//     alert("Option does not exist");
//   } else {
//     this.answers[answer] += 1;
//   }
//   displayResultFunc("array");
// };

// function displayResult(testData1) {
//   const type = prompt(
//     "How would you like to view the poll result? \n array or string",
//     "array"
//   );

//   if (type === "array") {
//     if (testData1) {
//       console.log(testData1);
//     } else {
//       console.log(this.answers);
//     }
//   }
//   if (type === "string") {
//     if (testData1) {
//       console.log(`Poll results are ${testData1.join(", ")}`);
//     } else {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   }
// }

// const displayResultFunc = displayResult.bind(poll, data1);

// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// ---------------------------------------------------------

// Jonas Solution
const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );

    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    type === "array"
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(", ")}`);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus Challenge
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
