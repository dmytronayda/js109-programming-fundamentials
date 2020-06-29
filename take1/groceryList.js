/**
 * Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, 
 * and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

Example:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Algo:
- initiate result arr
- loop over input array
  - result arr = result arr concatinate element at the 0th index repeated 1st index element value number of times
- return result arr
 */


function buyFruit(twoDimentionalArray) {
  let result = [];
  twoDimentionalArray.forEach(element => {
    for(let counter = 0; counter < element[1]; counter += 1) {
      result = result.concat(element[0]);
    }
  })
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));