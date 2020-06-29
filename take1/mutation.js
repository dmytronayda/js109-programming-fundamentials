let greeting = ["Hello"];

const test = arr => {
  arr = ["ByeBye"];
  arr.push("World!");
  return arr;
}

test(greeting);
console.log(greeting);