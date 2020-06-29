/*
Notes:
- input is a string of words
- return next to last word in string

Examples:
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

Algorithm:
- split the string into the array of words
- return words[words.length - 2]
*/

let penultimate = string => {
  let words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true