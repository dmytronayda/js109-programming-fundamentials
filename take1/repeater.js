/**
 * Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

Notes: 
- input is a string
- output is a string

Algo: 
- split the string into an array of chars
- map each character to double of itself
- join the array and return it as a string
 */

function repeater(string) {
  return string.split('').map(element => element.repeat(2)).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));        
console.log(repeater('Dima'));         // "DDiimmaa"