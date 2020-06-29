/**
 * - input is a number
 * - output is an array of subarrays
 * 
 * Examples: 
 * star(7);
 * ['*', ' ', ' ', '*', ' ', ' ', '*'] 3 stars / line: 0th line should have stars on positions of indexes: 0, midIndex, length - 1
 * [' ', '*', ' ', '*', ' ', '*', ' '] 3 stars / line: 1st line should have stars on positions of indexes: 0 + 1, midIndex, length - 1 - 1
 * [' ', ' ', '*', '*', '*', ' ', ' '] 3 stars / line: 2nd line should have stars on positions of indexes: 0 + 1 + 1, midIndex, length - 1 - 1 - 1
 * ['*', '*', '*', '*', '*', '*', '*'] midLine - all stars
 * 
 * Algorithm:
 * - declare a result array
 * - declare midPoint and assign it to Math.floor(inputArr / 2)
 * - loop from 0 to inputArr length - 1
 *     - declare currentStringArr variable and assign it to string of spaces with length of inputArr.length
 *     - declare starOne = 0
 *     - declare starThree = inputArr length - 1
 *   - if current iteration less than midPoint
 *       - currentStringArr[starOne] = '*'; 
 *       - starOne += 1;
 *       - currentStringArr[midPoint] = '*'; 
 *       - currentStringArr[starThree] = '*';
 *       - starThree -= 1;
 *  - if current iteration more than midPoint
 *       - currentStringArr[starOne] = '*'; 
 *       - starOne -= 1;
 *       - currentStringArr[midPoint] = '*'; 
 *       - currentStringArr[starThree] = '*';
 *       - starThree += 1;
 * - push currentStringArr to the resultArr
 * - print each string of the resultArr to the console
  */
const STAR_SYMBOL = '*';

function star(number) {
  let result = [];
  let midPoint = Math.floor(number / 2);
  let starOne = 0;
  let starThree = number - 1;

  for (let iteration = 0; iteration < number; iteration += 1) {
    let currentStringArr = ' '.repeat(number).split('');
    if (iteration < midPoint) {
      currentStringArr[starOne] = STAR_SYMBOL;
      starOne += 1;
      currentStringArr[starThree] = STAR_SYMBOL;
      starThree -= 1;
      currentStringArr[midPoint] = STAR_SYMBOL;
    } else if (iteration > midPoint) {
      currentStringArr[starOne - 1] = STAR_SYMBOL;
      starOne -= 1;
      currentStringArr[starThree + 1] = STAR_SYMBOL;
      starThree += 1;
      currentStringArr[midPoint] = STAR_SYMBOL;
    } else {
      currentStringArr = STAR_SYMBOL.repeat(number).split('');
    }
    result.push(currentStringArr.join(''));

  }
  result.forEach(string => console.log(string));
}
console.clear();
star(19);