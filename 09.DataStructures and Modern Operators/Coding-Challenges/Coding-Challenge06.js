/*
Reverse words in a given string

Given a string, the task is to reverse the order of the words in the given string. 

Input: s = “geeks quiz practice code” 
Output: s = “code practice quiz geeks”

Input: s = “i love programming very much” 
Output: s = “much very programming love i” 
*/

function reverseSentence(str) {
  //   const strArray = str.split(" ");

  let tempStr = "";
  for (let i = str.length; i <= 0; i--) {
    tempStr += str[i];
  }
  return tempStr;
}

console.log(reverseSentence("i love programming very much"));
