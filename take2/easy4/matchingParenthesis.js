/*
Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Notes: 
- input is a string
- output is a boolean if all parentheses are balanced
  - if no parentheses => true
  - always starts with '(' which can be followed by '(' 
  
Example:
isBalanced("(word(anotherWord))"); // true
isBalanced("(word)anotherWord))"); // false

Algorithm: 
- initiate the openingParenthesis and assign it to '('
- initiate the closingParenthesis and assign it to ')'

- initiate variable counterOpeningParen

- loop over the string
  - if char equal openingParenthesis => increment counterOpeningParen by 1 
  - if char equal to closingParenthesis => decrement counterOpeningParen by 1
  - if counterOpeningParen < 0 return false

- return true
*/

let isBalanced = string => {
  const OPENING_PAREN = '('; 
  const CLOSING_PAREN = ')';
  
  let counter = 0;
  
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    
    if (char === OPENING_PAREN) counter += 1;
    if (char === CLOSING_PAREN) counter -= 1;
    if (counter < 0) return false;
  }
  
  return counter === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);