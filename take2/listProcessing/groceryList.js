/*
Grocery List
Write a function that takes a grocery list (a two-dimensional array) with each 
element containing a fruit and a quantity, and returns a one-dimensional array
of fruits, in which each fruit appears a number of times equal to its quantity.

Notes: 
- input is a two-dimentional array [["fruit", 3], ["fruit", 2]]
- return is a one-dimensional array of fruits if which each fruit appears quantity number of times 

Example:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Algorithm:
- iterate over the array
  - transform each element (subArr) to array of fruits repeated quantity number
  of times
- reduce the array to one-dimentional array
  - ? (a, b) => a.concat(b)
- return one-dimentional array
*/

let repeater = twoDimentionalArr => {
  return twoDimentionalArr
    .map(subArr => {
      let result = [];
      let fruit = subArr[0];
      let quantity = subArr[1];
      
      for(let index = 0; index < quantity; index += 1) {
        result.push(fruit);
      }
      return result;
    })
}

let toOneDimention = twoDimentionalArr => {
  return twoDimentionalArr
    .reduce((a, b) => a.concat(b));
}

let buyFruit = twoDimentionalArr => {
  let fruits = repeater(twoDimentionalArr);
  return toOneDimention(fruits);
}

console.log(buyFruit([['apple', 1], ['orange', 2], ['banana', 5]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]