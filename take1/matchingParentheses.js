/**
 * Write a function that takes a string as argument, 
 * and returns true if all parentheses in the string are properly balanced, false otherwise.
 * To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
The tests above should log true.

Note that balanced pairs must each start with a (, not a ).

Notes: 
- input is a string
- output is a boolean
- balanced parantheses always start with `(` 

Algo: 
- declare a leftParenthesisCount variable
- declare a rightParenthesisCount variable

- loop over the characters one by one
  - if current char === `(` => increase leftParenthesisCount by 1
  - if current char === `)` => increase rightParenthesisCount by 1
- return boolean value of comparing leftParenthesisCount and rightParenthesisCount
 */
const LEFT_PARENTHESIS = '(';
const RIGHT_PARENTHESIS = ')';

function isBalanced(string) {
  let pairOfParens = 0;
  for(let index = 0; index < string.length; index += 1) {
    if (string[index] === LEFT_PARENTHESIS) {
      pairOfParens += 1;
    } else if (string[index] === RIGHT_PARENTHESIS) {
      pairOfParens -= 1;
    }
    if (pairOfParens < 0) return false;
  }
  
  return pairOfParens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);