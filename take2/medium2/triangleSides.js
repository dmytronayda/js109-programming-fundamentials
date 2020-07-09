/*
Triangle Sides
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must 
be greater than the length of the longest side, and every side must have a length
greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as 
arguments, and returns one of the following four strings representing the 
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Notes: 
input is a list of triangle sides
output is a string
- sum of lengths of two shortests sides must be greater than a len of longest side
- every side should be more than 0

Examples:

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Algorithm: 
- check if sizes produce a valid triangle
  - ? some < 0
  - get longestside = Math.max[side1 ... ]
  - 
  - if not return TRIANGLES[3];

- check if input form Equilateral triangle
  - ? every = side1

- check if input form Isosceles triangle
  - form an array
  - ? if element 1 === element 2 || element 2 === element 3

- else return TRIANGLES[2]
*/

const TRIANGLES = ["equilateral", "isosceles", "scalene", "invalid"];

let isValidTriangle = (side1Len, side2Len, side3Len) => {
  let longestSide = Math.max(side1Len, side2Len, side3Len);
  let perimeter = [side1Len, side2Len, side3Len].reduce((a, b) => a + b);
  if (perimeter - longestSide < longestSide) return false;
  if ([side1Len, side2Len, side3Len].some(element => element === 0)) return false;
  return true;
}

let isEquilateralTriangle = (side1Len, side2Len, side3Len) => {
  return [side1Len, side2Len, side3Len]
    .every((side, _, arr) => side === arr[0]);
}

let isIsoscelesTriangle = (side1Len, side2Len, side3Len) => {
  if (side1Len === side2Len || side1Len === side3Len) return true;
  if (side2Len === side1Len || side2Len === side3Len) return true;
  if (side3Len === side2Len || side3Len === side1Len) return true;
  return false;
}

let triangle = (side1Len, side2Len, side3Len) => {
  if (!isValidTriangle(side1Len, side2Len, side3Len)) return TRIANGLES[3];
  else if (isEquilateralTriangle(side1Len, side2Len, side3Len)) return TRIANGLES[0];
  else if (isIsoscelesTriangle(side1Len, side2Len, side3Len)) return TRIANGLES[1];
  else {
    return TRIANGLES[2];
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
