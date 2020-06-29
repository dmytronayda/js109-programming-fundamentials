/**
 * Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. 
 * The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Notes: 
- input is a string
- output is a string
- rules ['a','e','i','o','u' + digits + punctuation + whitespace] should not be doubled

Algo
- define consonants (separate function)
- use repeater func to repeat only consonants
 */

let isLetter = char => {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

let isConsonant = char => {
  if (isLetter(char)) {
    let vowels = ['a','e','i','o','u'];
    return !vowels.includes(char.toLowerCase());
  }
  return undefined;
}

function doubleConsonants(string) {
  let stringArr = string.split('');
  let resultArr = [];
  stringArr.forEach(element => {
    if (isConsonant(element)) {
      resultArr.push(element.repeat(2));
    } else {
      resultArr.push(element);
    }
  });
  return resultArr.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
