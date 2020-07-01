/*
Write a function that takes a positive integer, n, as an argument, 
and logs a right triangle whose sides each have n stars.
The hypotenuse of the triangle (the diagonal side in the images below) should 
have one end at the lower-left of the triangle, and the other end at the upper-right.

Notes: 
- input is a number
- output is an array of strings, each printed to the console

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Algorithm:
- initiate a result array
- initiate a numSpaces and assign to argument value - 1
- initiate a numStars and assign to 1
- iterate from 0 to argument value
  - push to the result array ' ' repated numSpaces times + '*' repeated numStars times
  - decrease numSpaces by 1
  - increase numStars by 1
- iterate over the result array
  - print each string elment to the console
*/

let triangle = number => {
  let resultArr = [];

  const SPACE = ' ';
  const STAR = '*';
  let numSpaces = number - 1;
  let numStars = 1;

  for (let index = 0; index < number; index += 1) {
    resultArr.push(SPACE.repeat(numSpaces) + STAR.repeat(numStars));
    numSpaces -= 1;
    numStars += 1;
  }

  resultArr.forEach(line => console.log(line));
}

console.clear()
triangle(10);
//          *
//         **
//        ***
//       ****
//      *****
//     ******
//    *******
//   ********
//  *********
// **********

triangle(7);
//       *
//      **
//     ***
//    ****
//   *****
//  ******
// *******