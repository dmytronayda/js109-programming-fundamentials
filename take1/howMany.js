/**
 * Write a function that counts the number of occurrences of each element in a given array. 
 * Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Example:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

Notes: 
- input is an array
- output is an object

Algo:
- declare a result object
- loop over the array
  - if value of the current array index element cannot be found in the object
  - assign it as a key value pair for the object: prop = 1
  - else increase the value of the property by 1
- loop over object and print each property to the console
 */

function countOccurrences(array) {
  let result = {};
  array.forEach(element => {
    if (!result[element]) {
      result[element] = 1;
    } else if (result[element]) {
      result[element] += 1;
    }
  });
  for (let prop in result) {
    console.log(`${prop} => ${result[prop]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);