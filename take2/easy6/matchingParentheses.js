/*
Matching Parentheses?
Write a function that takes a string as argument, and returns true if all parentheses 
in the string are properly balanced, false otherwise. To be properly balanced, 
parentheses must occur in matching '(' and ')' pairs.

Notes: 
- input is a string
- output is a boolean
 - always starts with '(' 

Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

Algorithm:
- declare a variable match and assign it to 0
- iterate over the string chars
  - if char === '(' increment 1 from the match
  - if char === ')' decrement 1 from the match
  - if match < 0 - return false
- if match === 0 return true
*/

let isBalanced = string => {
  let matched = 0;

  string.split('').forEach(char => {
    if (char === '(') matched += 1;
    else if (char === ')') matched -= 1;
    if (matched < 0) return false;

    
  })

  return matched === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);