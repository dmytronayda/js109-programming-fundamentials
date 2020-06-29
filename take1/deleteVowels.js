/**
 * Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

Examples:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

Algorithm:
- define vowels array
- declare a result array
- loop over the array strings
    - define updatedStr variable and assign it to empty string
    - loop over a given string chars
      - if vowels array includes char 
        - continue
      - updatedStr concat char
- return updated array
 */

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function removeVowels(array) {
  let result = [];
  array.forEach(element => {
    let updatedStr = '';
    element.split('').forEach(char => {
      if (!vowels.includes(char)) {
        updatedStr += char;
      }
    });
    result.push(updatedStr);
  });

  return result;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]