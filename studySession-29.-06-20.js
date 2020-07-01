/*
Notes:
- input is an array of integers
- output is an index N where the sum of ints on the left === sum of ints on the right
- if there's no such value => return -1

Algorithm: 
- loop over the array values
- declare a variable sumLeft and assign to the sum of the integers on the left from given index value 
- declare a variable sumRight and assign to the sum of the integers on the right from given index value
- if sumLeft === sumRight => return index of the element
- return -1 
*/


function findEvenIndex(array) {
  for (let index = 0; index <= array.length - 1; index += 1) {
    let sumLeft = getSum(array.slice(0, index));
    let sumRight = getSum(array.slice(index + 1));

    if (sumLeft === sumRight) return index; 
  }
  return -1;
}

function getSum(array) {
  return array.reduce(((a, b) => a + b), 0);
}


console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true