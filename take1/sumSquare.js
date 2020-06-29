/**
 * Notes:
 * - input is an integer
 * - output is an integer
 * 
 * Examples: 
 * sumSquareDifference(3); // (1 + 2 + 3) ** 2 - (1**2 + 2**2 + 3**2)
 * sumSquareDifference(4); // (1 + 2 + 3 + 4)**2 - (1**2 + 2**2 + 3**2 + 4**2)
 * 
 * Algorithm:
 * - declare ints array
 * - loop from count = 1 to  count <= input
 *   - push the count to the ints
 * 
 * - declare sumToSquare variable
 *  - calculate sumToSquare
 *  - reduce the ints array to sum of its elements ** 2
 * - declare sumOfSquares variable
 *  - for each element of the ints array, square it and add it to sumOfSquares
 * 
 * - return sumToSquare - sumOfSquares
 */

function sumSquareDifference(number) {
  let ints = [];
  for(let counter = 1; counter <= number; counter += 1) {
    ints.push(counter);
  }
  let sumToSquare = ints.reduce((a, b) => a + b) ** 2;
  
  let sumOfSquares = 0; 
  ints.forEach(integer => sumOfSquares += integer ** 2);

  return sumToSquare - sumOfSquares;
}

console.log(sumSquareDifference(3));
