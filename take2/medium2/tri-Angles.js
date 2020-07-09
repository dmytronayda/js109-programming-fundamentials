/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and 
every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and 
returns one of the following four strings representing the triangle's 
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry
about floating point errors. You may also assume that the arguments are in degrees.

Notes:
- input is a list of angles
- output is a string - type of the triangle
  - right => one angle === 90
  - acute => all 3 angles < 90
  - obtuse => one angle > 90
- valid triangle: 
  - every angle more than 0
  - sum of angles === 180

Examples:

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

Algorithm: 
- define if triangle is valid
  - [angle1, angle2, angle3].every > 0
  - [angle1, angle2, angle3].reduce to sume === 180
- define if triangle is right
  - some angle === 90
- define if triangle is obtuse
  - some angle > 90
- else return acute
*/

let isValidTriangle = (angle1, angle2, angle3) => {
  let anglesArr = [angle1, angle2, angle3];
  return anglesArr.every(angle => angle > 0) && 
    anglesArr.reduce((a, b) => a + b) === 180 ? true : false;
}

let isRightTriangle = (angle1, angle2, angle3) => {
  let anglesArr = [angle1, angle2, angle3];
  return anglesArr.some(angle => angle === 90) ? true : false;
}

let isObtuseTriangle = (angle1, angle2, angle3) => {
  let anglesArr = [angle1, angle2, angle3];
  return anglesArr.some(angle => angle > 90) ? true : false;
}

let triangle = (angle1, angle2, angle3) => {
  if (!isValidTriangle(angle1, angle2, angle3)) return "invalid";
  else if (isRightTriangle(angle1, angle2, angle3)) return "right";
  else if (isObtuseTriangle(angle1, angle2, angle3)) return "obtuse";
  else {
    return "acute";
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"