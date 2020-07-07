/*
Write a function that takes an array of strings, and returns an array of the 
same values with all vowels (a, e, i, o, u) removed.

Examples:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

Algorithm:
- iterate over the array of strings 
  - if element has only vowels => return an empty string
  - match all elements that are not vowels and join them together
*/

// let removeVowels = arr => {
//   let notVowels = /[^aeiou]/gi;

//   return arr
//     .map(element => {
//       if (!notVowels.test(element)) return '';
//       return element
//         .match(notVowels)
//         .join('');
//     })
// }


// Replace solution

let removeVowels = arr => {
  let vowels = /[aeiou]/gi;
  return arr
    .map(string => string.replace(vowels, ''));
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"])