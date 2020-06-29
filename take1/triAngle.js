/**
 * Notes: 
 * - input is 3 argument values - integers
 * - output is a string
 * 
 * Example: 
 * triangle(60, 70, 50); // "acute"
 * triangle(90, 50, 40); // "right"
 * triangle(120, 30, 30); // "obtuse"
 * triangle(120, 30, 40); // "invalid"
 * triangle(0, 30, 40); // "invalid"
 * 
 * Algorithm:
 * - check if triangle is valid: 
 *  - sum of angles === 180
 *  - none of args === 0
 * - if valid triangle
 *   - check if right triangle
 *    - check if some of the args === 90 && sum === 180
 *   - check if acute
 *    - every arg is < 90 && sum === 180
 *   - else - return 'obtuse'
 */

function validTriangle(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  let invalidAngle = [angle1, angle2, angle3].some(element => element <= 0);
  if (sum !== 180 || invalidAngle) return false;
  return true;
}

function triangle(angle1, angle2, angle3) {
  let sum = angle1 + angle2 + angle3;
  if (validTriangle(angle1, angle2, angle3)) {
    let rightAngle = [angle1, angle2, angle3].some(element => element === 90);  
    if (rightAngle && sum === 180) return 'right';

    let acuteAngles = [angle1, angle2, angle3].every(element => element < 90);  
    if (acuteAngles && sum === 180) return 'acute';

    else {
      return 'obtuse';
    }
  }
  return 'invalid';
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));