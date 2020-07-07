/*
Staggered Caps (Part 1)

Write a function that takes a string as an argument, and returns that string 
with a staggered capitalization scheme. Every other character, starting from the
first, should be capitalized and should be followed by a lowercase or 
non-alphabetic character. Non-alphabetic characters should not be changed, but 
should be counted as characters for determining when to switch between upper and
lower case.

Notes:
- input is a string
- output is a string with every other char starting from index 0 is capitalized
  - AbCdE

Examples:

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"

Algorithm:
- split the string into the array of chars
- loop over the chars - transformation
  - if char index is even number => capitalize
  - else lowercase the char
- join the array of chars on the empty string
- return the string
*/

let staggeredCase = str => {
  return str
    .split('')
    .map((char, index) => {
      if (index % 2 === 0) return char.toUpperCase();
      else {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"