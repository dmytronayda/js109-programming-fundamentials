/**
 * Notes: 
 * - input is an int (n)
 * - sides each have (n) stars
 * 
 * Examples: 
 * [-] - dash for visibility
 * 
 * triangle(5);
 * 
 * ----*
 * ---**
 * --***
 * -****
 * *****
 * 
 * triangle(9);
 * --------*
 * -------**
 * ------***
 * -----****
 * ----*****
 * ---******
 * --*******
 * -********
 * *********
 * 
 * Algorithm: 
 * - input is an integer (n)
 * - set the the dash char 
 * - set dash num to n - 1
 * - set the star char to 1
 * - set star num
 * - initiate a loop from 0 to < n
 *  - console.log(dash.repeat(dash num) + star.repeat(star num))
 *  - reassign dash num to itself - 1;
 *  - reassign start num to itself + 1;
 */

let triangle = num => {
  console.clear();

  let dashChar = ' ';
  let starChar = '⧫';

  let dashCount = num - 1;
  let starCount = 1;

  for (let counter = 0; counter < num; counter += 1) {
    console.log(dashChar.repeat(dashCount) + starChar.repeat(starCount));
    dashCount -= 1;
    starCount += 1;
  }
}

triangle(9);
//         ⧫
//        ⧫⧫
//       ⧫⧫⧫
//      ⧫⧫⧫⧫
//     ⧫⧫⧫⧫⧫
//    ⧫⧫⧫⧫⧫⧫
//   ⧫⧫⧫⧫⧫⧫⧫
//  ⧫⧫⧫⧫⧫⧫⧫⧫
// ⧫⧫⧫⧫⧫⧫⧫⧫⧫