// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

//-------------------------------------------------------------//

//Understanding the Problem
//- Convert the array of numbers into string with each value in the array

//Breaking up into sub-Problem
//- Loop through the array and return the value
//- alongwith the value return the concatenated string with days
//- the days are the index number + 1
//- The value returned should be stored in another array
//- Then join the array and return as string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const temps = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr.push("...");
    } else {
      temps.push(`... ${arr[i]}ºC in ${i + 1}days`);
    }
  }
  return temps;
};
const returnValue = printForecast(data1);

console.log(returnValue);
