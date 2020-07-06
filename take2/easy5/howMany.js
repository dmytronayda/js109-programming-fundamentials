/*
How Many?
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").

Notes:
- input is an array
- output is a number of occurences of each word

Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

Algorithm:
- initiate a result object
- iterate over the array of elements
  - check if object has property name same as current element value (e.g. result['car'] !== undefined) 
    - yes: increment the value of property by 1
    - no: assign property with value of 1

- iterate over the result object entries
  - print prop name + => + prop value
*/

let countOccurrences = array => {
  let result = {};

  array.forEach(element => {
    result[element] = result[element] + 1 || 1;
  })

  Object.entries(result).forEach(prop => {
    let [key, val] = prop;
    console.log(`${key} => ${val}`);
  })
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2