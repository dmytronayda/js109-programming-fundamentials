/*
Notes:
- input is an array and a value
- output is a boolean depeding if value exists in multidimentional sequence

Examples:
locate([1, 2, 3 [1, 2, 'olena', 'free', [1, 2, 'Dima', ['dima', 1]]]], 'dima'); // true

Algorithm:
- initialize a converted array
- loop over the array elements until all elements are not arrays
  - if element is not an array => push element to the result array
  - if element is an array => convert each array element to primitive values
    - loop over the array elements
      - if element is not array - push to the result array
      - else 
*/


console.log(-12 % 5); // -10
