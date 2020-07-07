/*
Staggered Caps (Part 2)
Modify the function from the previous exercise so it ignores non-alphabetic 
characters when determining whether it should uppercase or lowercase each letter.
The non-alphabetic characters should still be included in the return value;
they just don't count when toggling the desired case.

- input is a string
- output is a string in staggered case
  - ever other char starting from 0 AND excluding the non-alphabetic chars should
  be uppercased

Example:

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

Algorithm:
- initiate a variable counter and assign it to 0

- split the string into the array of chars
- loop over the chars - transformation
  - if char is letter and count is even number 
    - capitalize
    - increase the counter
  - else if char is letter and count is not even number 
    - lowercase the char
    - increase the counter
  - return char as is
- join the array of chars on the empty string
- return the string
*/
let isLetter = char => /[a-zA-Z]/.test(char);

let staggeredCase = str => {
  let counter = 0;
  return str
    .split('')
    .map(char => {
      if (counter % 2 === 0 && isLetter(char)) {
        counter += 1;
        return char.toUpperCase();
      } else if (counter % 2 !== 0 && isLetter(char)) {
        counter += 1;
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");