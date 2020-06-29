/**
 * Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Example:

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Notes:
- input is an array
- output is an array sorted based on the string value of a element

Algo:
- make rules object
- convert numbers to strings equivalents from the array NUMBERS
  - declare a resultStrArr
  - for each number
    - convert number to string 
- sort strings based on the characters
- convert strings back to numbers
  - declare resultNumArr
- return array
 */

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

function alphabeticNumberSort(array) {
  let resultArr = [];
  array.forEach(element => {
    NUMBERS.forEach((numStr, index) => {
      if (element === index) resultArr.push(numStr);
     })
  });
  let sorted = resultArr.sort();
  
  return sorted.map(element => {
    return NUMBERS.indexOf(element);
  })
}


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]