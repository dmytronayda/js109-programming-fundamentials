/**
 * Notes: 
 * - return a 4 pointed diamond in n x n grid
 * - n is an odd int (n % 2 === 1)
 * - n represents the length of the mid diamond row
 * 
 * Examples:
 * diamond(1);
 * * 
 * 
 * diamond(5);
 *   *
 *  ***
 * *****
 *  ***
 *   *
 * 
 * Algorithm: 
 * - if n is 1 - print a diamond of 1 to the console
 * - declare a result array
 * - define mid point position
 * - define stars = 1
 * - loop from 1 <= n rows
 *   - loop over a given line from 1 <= n and push spaces and diamonds as required
 *   - if index === midpoint / push stars
 *   - else push space
 *   - midPoint -= 1
 *   - stars += 2
 * - forEach inner array in the result array, print it to the console
 */
const DIAMOND = '💩';
const SPACE = ' ';

function diamond(number) {
  if (number === 1 ) console.log(DIAMOND);
  let result = [];
  let midRow = Math.floor(number / 2) + 1;
  let midPoint = Math.floor(number / 2);
  let stars = 1;
  for (let row = 1; row <= midRow; row += 1) {
    let rowString = '';
    for (let char = 0; char < number; char += 1) {
      if (char === midPoint) {
        rowString += DIAMOND.repeat(stars);
        char += stars;
      };
      rowString += SPACE;
    }
    midPoint -= 1;
    stars += 2;
    result.push(rowString);
  }
  result.forEach(string => console.log(string));
  result.slice(0, midRow - 1).reverse().forEach(string => console.log(string));
}

diamond(45);