/*
Double Char (Part 1)
Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.

Notes:
- input is a string
- output is a string with each char doubled

Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
*/

let repeater = str => {
  if (str.lenght === 0) return str;
  return str
    .split('')
    .map(char => char.repeat(2))
    .join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""